export const buildStatusPage = ({ title, message, actionLabel, actionHref }) => {
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
      </head>
      <body style="margin:0; padding:24px; font-family: Arial, sans-serif; background:#f8f7f4;">
        <div style="max-width:520px; margin:0 auto; background:#ffffff; border-radius:12px; padding:24px; border:1px solid #f1e6d2;">
          <h1 style="margin:0 0 12px; color:#5a3b1e; font-size:22px;">${title}</h1>
          <p style="margin:0 0 20px; color:#6b7280; font-size:14px;">${message}</p>
          ${actionHref ? `
            <a href="${actionHref}" style="display:inline-block; padding:10px 16px; background:#b45309; color:#ffffff; text-decoration:none; border-radius:8px; font-size:14px;">
              ${actionLabel || 'Voltar'}
            </a>
          ` : ''}
        </div>
      </body>
    </html>
  `;
};
