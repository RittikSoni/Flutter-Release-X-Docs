import * as React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const [colorMode, setColorMode] = React.useState("light");

  // ✅ Taglines for Typewriter Effect
  const taglines = [
    "Effortlessly release your Flutter, or non-Flutter apps.",
    "Works with any project, whether it's Flutter, React, or other non-Flutter projects.",
    "Seamless CI/CD pipeline for all platforms.",
    "Automate your app release process today!",
    "Release, deploy, and share with one command!",
  ];

  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [fade, setFade] = React.useState(true);

  const typingSpeed = isDeleting ? 40 : 70;
  const pauseTime = isDeleting ? 250 : 1800;

  // ✅ Typewriter Effect
  React.useEffect(() => {
    const currentText = taglines[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentText) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  // ✅ Dark Mode Detection
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setColorMode(
        document.documentElement.getAttribute("data-theme") || "light"
      );
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // ✅ Firefly Effect using Canvas API
  React.useEffect(() => {
    const canvas = document.getElementById(
      "fireflyCanvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireflies: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1.5 - 0.75,
        speedY: Math.random() * 1.5 - 0.75,
      });
    }

    const drawFireflies = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireflies.forEach((firefly) => {
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.size, 0, Math.PI * 2);
        // Soft glowing yellowish fireflies
        ctx.fillStyle = `rgba(255, 255, 204, ${Math.random() * 0.6 + 0.2})`;
        ctx.fill();
      });
    };

    const updateFireflies = () => {
      fireflies.forEach((firefly) => {
        firefly.x += firefly.speedX;
        firefly.y += firefly.speedY;

        if (firefly.x < 0 || firefly.x > canvas.width) firefly.speedX *= -1;
        if (firefly.y < 0 || firefly.y > canvas.height) firefly.speedY *= -1;
      });
    };

    const animate = () => {
      drawFireflies();
      updateFireflies();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  // ✅ Theme Styles
  const isDarkMode = colorMode === "dark";
  const glassBg = isDarkMode
    ? "bg-white/10 border-white/20"
    : "bg-white/10 border-gray-300";
  const cardBgColor = isDarkMode
    ? "bg-white/10 backdrop-blur-xl border border-white/20"
    : "bg-white/10 backdrop-blur-xl border border-gray-300";
  const cardFgColor = isDarkMode ? "text-teal-300" : "text-teal-700";
  const titleColor = isDarkMode ? "text-teal-300" : "text-teal-700";

  return (
    <Layout
      title={siteConfig?.title || "Flutter Release X"}
      description="Flutter Release X - Simplifying your Flutter CI/CD pipeline"
    >
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6 transition-all relative">
        {/* ✅ Background GIF with Opacity */}
        {isDarkMode ? (
          <div className="absolute inset-0 z-0">
            <video
              src={require("/video/frx_logo_animation.mp4").default}
              className="w-full h-full object-cover opacity-30"
              autoPlay
              loop
              muted
            />
          </div>
        ) : null}

        {/* ✅ Firefly Canvas */}
        <canvas
          id="fireflyCanvas"
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        ></canvas>
        {/* ✅ Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 via-indigo-400/10 to-gray-900/20 blur-3xl opacity-50 z-0"></div>
        {/* 🚀 HERO SECTION */}
        <div
          className={`relative backdrop-blur-2xl rounded-3xl shadow-2xl p-12 w-full max-w-4xl border ${glassBg} animate-fadeIn z-10`}
        >
          <h1
            className={`text-5xl font-extrabold mb-4 ${titleColor} transition-transform transform scale-95 hover:scale-100`}
          >
            🚀 {siteConfig?.title || "Flutter Release X"}
          </h1>
          <p
            className={`text-xl mb-6 ${titleColor} tracking-wide font-mono transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {text} <span className="animate-blink">|</span>
          </p>

          {/* ✅ Floating Call-to-Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              to="/docs"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition hover:scale-105"
            >
              📖 Read the Docs
            </Link>
            <a
              href="https://pub.dev/packages/flutter_release_x"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md transition hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              📦 View on Pub.dev
            </a>
            <a
              href="https://github.com/RittikSoni/Flutter-Release-X"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⭐ GitHub Repository
            </a>
          </div>
        </div>
        {/* 🌟 FEATURES SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl z-10">
          {[
            {
              title: "🚀 Fast & Automated",
              description:
                "One command to build, upload, and share your Flutter, or non-Flutter apps.",
            },
            {
              title: "☁️ Cloud Integration",
              description:
                "Seamlessly upload releases to GitHub, Google Drive, AWS, Slack & more.",
            },
            {
              title: "📦 CI/CD Pipelines",
              description:
                "Supports advanced pipelines to streamline your workflow.",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className={`${cardBgColor} rounded-xl p-6 text-center shadow-lg transition hover:scale-105 hover:shadow-teal-500`}
            >
              <h3 className={`text-lg font-semibold ${cardFgColor}`}>
                {title}
              </h3>
              <p className={`${cardFgColor} tracking-wide text-sm`}>
                {description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
