import QRCode from "qrcode";

export const generateQR = async (req, res) => {
    try {
        const { text } = req.body;
        const qr = await QRCode.toDataURL(text);
        res.send(qr);
    } catch (error) {
        res.status(500).send(error);
    }
}