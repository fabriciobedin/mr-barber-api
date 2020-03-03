import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (e, res) => {
        if (e) return cb(e);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    }
  })
};
