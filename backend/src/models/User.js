import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Bangladesh mobile phone number regex per PRD FR-AUTH-01:
// Matches +8801[3-9]XXXXXXXX or 01[3-9]XXXXXXXX (11 or 13 digits)
export const BD_PHONE_REGEX = /^(?:\+8801|01)[3-9]\d{8}$/;

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [80, 'Full name cannot exceed 80 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Bangladesh phone number is required'],
      unique: true,
      trim: true,
      validate: {
        validator: function (v) {
          return BD_PHONE_REGEX.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid Bangladesh phone number. Use format 01XXXXXXXXX or +8801XXXXXXXXX`,
      },
    },
    passwordHash: {
      type: String,
      required: [true, 'Password hash is required'],
    },
    role: {
      type: String,
      enum: {
        values: ['CUSTOMER', 'TURF_OWNER', 'ADMIN'],
        message: '{VALUE} is not a valid role',
      },
      default: 'CUSTOMER',
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically provides createdAt and updatedAt (ISODate)
  }
);

// Explicit unique indexes per PRD Section 8.1
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ phone: 1 }, { unique: true });

// Instance method to safely verify password using bcrypt
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

// Transform to remove sensitive passwordHash when serialized to JSON
userSchema.methods.toJSON = function () {
  const userObj = this.toObject();
  delete userObj.passwordHash;
  return userObj;
};

const User = mongoose.model('User', userSchema);

export default User;

