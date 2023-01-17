import { ClassicBalloon } from '../ckeditor/classicBalloon';

module.exports = ({ env }) => ({
  ckeditor: ClassicBalloon,
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      editor: {
        mediaEmbed: {
          previewsInData: true
        }
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
