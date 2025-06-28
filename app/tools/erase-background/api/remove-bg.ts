import formidable from 'formidable';
import fs from 'fs';
import axios from 'axios';

export const config = {
  api: {
    bodyParser: false, // Important: disables default body parsing
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ message: 'Error parsing file' });
    }

    const imageFile = files.image_file?.[0];
    if (!imageFile) return res.status(400).json({ message: 'No file uploaded' });

    try {
      const formData = new FormData();
      formData.append('image_file', fs.createReadStream(imageFile.filepath));
      formData.append('size', fields.size || 'auto');
      formData.append('format', fields.format || 'png');

      const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
        headers: {
          'X-Api-Key': process.env.REMOVE_BG_API_KEY,
          ...formData.getHeaders(),
        },
        responseType: 'arraybuffer',
      });

      res.setHeader('Content-Type', `image/${fields.format || 'png'}`);
      res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
      console.error('Remove.bg error:', error?.response?.data || error.message);
      res.status(500).json({ message: 'Failed to process image' });
    }
  });
}
