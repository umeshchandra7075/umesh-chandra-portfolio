// // const nodemailer = require("nodemailer");

// // const transporter = nodemailer.createTransport({
// //   host: "smtp.gmail.com",
// //   port: 587,
// //   secure: false,
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// // const sendMail = async (req, res) => {
// //   const { name, email, message } = req.body;

// //   try {
// //     await transporter.sendMail({
// //       from: process.env.EMAIL_USER,
// //       to: process.env.EMAIL_USER,
// //       replyTo: email,
// //       subject: `Portfolio Contact - ${name}`,
// //       html: `
// //         <h2>New Portfolio Contact</h2>

// //         <p><strong>Name:</strong> ${name}</p>

// //         <p><strong>Email:</strong> ${email}</p>

// //         <p><strong>Message:</strong></p>

// //         <p>${message}</p>
// //       `,
// //     });

// //     return res.status(200).json({
// //       success: true,
// //       message: "Email sent successfully",
// //     });
// //   } catch (err) {
// //     console.error(err);

// //     return res.status(500).json({
// //       success: false,
// //       message: err.message,
// //     });
// //   }
// // };

// // module.exports = { sendMail };


// const nodemailer = require("nodemailer");

// // Gmail Transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Verify SMTP Connection
// transporter.verify((error, success) => {
//   if (error) {
//     console.error("❌ SMTP Error:", error);
//   } else {
//     console.log("✅ SMTP Server is Ready");
//   }
// });

// const sendMail = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required.",
//       });
//     }

//     await transporter.sendMail({
//       from: `"${name}" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `📩 New Portfolio Contact from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding:20px;">
//           <h2 style="color:#2563eb;">New Portfolio Contact</h2>
//           <hr>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong></p>
//           <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
//             ${message}
//           </div>
//         </div>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Email sent successfully.",
//     });
//   } catch (err) {
//     console.error("❌ Email Error:", err);

//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// module.exports = { sendMail };


const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Portfolio Contact from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { sendMail };