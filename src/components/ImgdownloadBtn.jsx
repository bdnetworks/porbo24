import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

const CARD_SIZE = 1080;
const IMAGE_HEIGHT = 685;
const TITLE_PANEL_TOP = 685;
const FOOTER_HEIGHT = 82;
const RED = "#f71920";
const DARK = "#050505";

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });

const drawCoverImage = (ctx, image, x, y, width, height) => {
  const imageRatio = image.width / image.height;
  const targetRatio = width / height;
  let sourceWidth = image.width;
  let sourceHeight = image.height;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > targetRatio) {
    sourceWidth = image.height * targetRatio;
    sourceX = (image.width - sourceWidth) / 2;
  } else {
    sourceHeight = image.width / targetRatio;
    sourceY = (image.height - sourceHeight) / 2;
  }

  ctx.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    x,
    y,
    width,
    height
  );
};

const wrapText = (ctx, text, maxWidth) => {
  const words = text.trim().split(/\s+/);
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width <= maxWidth) {
      line = testLine;
      return;
    }

    if (line) {
      lines.push(line);
    }
    line = word;
  });

  if (line) {
    lines.push(line);
  }

  return lines.slice(0, 3);
};

const drawRoundedRect = (ctx, x, y, width, height, radius) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

const drawWorldPattern = (ctx) => {
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.fillStyle = "#07186b";
  ctx.beginPath();
  ctx.ellipse(270, 805, 230, 78, -0.18, 0, Math.PI * 2);
  ctx.ellipse(560, 770, 250, 92, 0.12, 0, Math.PI * 2);
  ctx.ellipse(760, 855, 290, 105, -0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "rgba(7, 24, 107, 0.08)";
  ctx.lineWidth = 2;
  for (let x = 80; x < CARD_SIZE; x += 77) {
    ctx.beginPath();
    ctx.moveTo(x, TITLE_PANEL_TOP);
    ctx.lineTo(x, CARD_SIZE - FOOTER_HEIGHT);
    ctx.stroke();
  }
  for (let y = TITLE_PANEL_TOP + 78; y < CARD_SIZE - FOOTER_HEIGHT; y += 78) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(CARD_SIZE, y);
    ctx.stroke();
  }
  ctx.restore();
};

const drawFooterIcon = (ctx, x, label, type) => {
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(x, 1038, 22, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = RED;
  ctx.font = "700 29px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(type, x, 1038);

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 28px Arial";
  ctx.textAlign = "left";
  ctx.fillText(label, x + 43, 1038);
};

const ImgdownloadBtn = ({ news }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!news?.img || !news?.title || isDownloading) return;

    setIsDownloading(true);

    try {
      const [newsImage, logoImage] = await Promise.all([
        loadImage(news.img),
        loadImage("/Logo.png"),
      ]);

      const canvas = document.createElement("canvas");
      canvas.width = CARD_SIZE;
      canvas.height = CARD_SIZE;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, CARD_SIZE, CARD_SIZE);

      drawCoverImage(ctx, newsImage, 8, 8, CARD_SIZE - 16, IMAGE_HEIGHT - 8);

      ctx.fillStyle = RED;
      drawRoundedRect(ctx, 28, 625, 152, 42, 8);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 27px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("সংগৃহীত ছবি", 104, 647);

      ctx.fillStyle = "rgba(255,255,255,0.96)";
      ctx.fillRect(4, TITLE_PANEL_TOP, CARD_SIZE - 8, 313);
      drawWorldPattern(ctx);

      ctx.fillStyle = DARK;
      ctx.font = "900 58px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      const lines = wrapText(ctx, news.title, 930);
      const lineHeight = 68;
      const titleY = 755 - ((lines.length - 1) * lineHeight) / 2;
      lines.forEach((line, index) => {
        ctx.fillText(line, CARD_SIZE / 2, titleY + index * lineHeight);
      });

      ctx.fillStyle = RED;
      drawRoundedRect(ctx, 428, 935, 225, 44, 7);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 29px Arial, sans-serif";
      ctx.fillText("বিস্তারিত কমেন্টে", CARD_SIZE / 2, 943);

      ctx.fillStyle = RED;
      ctx.fillRect(4, CARD_SIZE - FOOTER_HEIGHT, CARD_SIZE - 8, FOOTER_HEIGHT - 4);

      ctx.save();
      ctx.translate(112, 1001);
      ctx.rotate(-0.06);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "rgba(0,0,0,0.28)";
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 8;
      drawRoundedRect(ctx, -94, -72, 190, 132, 18);
      ctx.fill();
      ctx.shadowColor = "transparent";
      ctx.strokeStyle = "#07186b";
      ctx.lineWidth = 5;
      ctx.stroke();
      drawCoverImage(ctx, logoImage, -80, -50, 160, 92);
      ctx.restore();

      drawFooterIcon(ctx, 252, "www.porbo24.com", "◎");
      drawFooterIcon(ctx, 625, "porbo24", "f");
      drawFooterIcon(ctx, 888, "porbo24", "▶");

      ctx.strokeStyle = RED;
      ctx.lineWidth = 8;
      ctx.strokeRect(4, 4, CARD_SIZE - 8, CARD_SIZE - 8);

      const link = document.createElement("a");
      link.download = `porbo24-news-${news.id || Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      alert("এই ছবিটি ডাউনলোড কার্ড বানানো যাচ্ছে না। Image host canvas export block করতে পারে।");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isDownloading}
      className="mb-8 inline-flex items-center gap-2 bg-[#07186b] px-5 py-3 text-[16px] font-semibold text-white transition hover:bg-[#0b2b9b] disabled:cursor-not-allowed disabled:opacity-70"
    >
      <FaDownload />
      {isDownloading ? "তৈরি হচ্ছে..." : "নিউজ ডাউনলোড"}
    </button>
  );
};

export default ImgdownloadBtn;
