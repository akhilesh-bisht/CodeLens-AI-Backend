import { User } from '../models/User';
import { sign, verify } from '../utils/jwt';
import { BadRequestError, UnauthorizedError } from '../utils/errors';

/**
 * AuthService class handles user authentication and management.
 */
export class AuthService {
    /**
     * Logs in a user with the provided email and password.
     * @param email - User's email address.
     * @param password - User's password.
     * @returns A promise that resolves to the user object and JWT token.
     */
    async login(email: string, password: string) {
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            throw new UnauthorizedError('Invalid credentials');
        }

        const token = sign({ id: user.id });
        return { user, token };
    }

    /**
     * Registers a new user with the provided details.
     * @param email - User's email address.
     * @param password - User's password.
     * @param name - User's name.
     * @returns A promise that resolves to the created user object and JWT token.
     */
    async signup(email: string, password: string, name: string) {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new BadRequestError('User already exists');
        }

        const user = new User({ email, password, name });
        await user.save();

        const token = sign({ id: user.id });
        return { user, token };
    }

    /**
     * Logs out the user by invalidating the token.
     * @param token - The JWT token to invalidate.
     */
    logout(token: string) {
        // Invalidate the token logic can be implemented here
        return { message: 'Logged out successfully' };
    }

    /**
     * Retrieves the current user's information based on the provided token.
     * @param token - The JWT token of the user.
     * @returns A promise that resolves to the user object.
     */
    async getCurrentUser(token: string) {
        const decoded = verify(token);
        const user = await User.findById(decoded.id);

        if (!user) {
            throw new UnauthorizedError('User not found');
        }

        return user;
    }
}