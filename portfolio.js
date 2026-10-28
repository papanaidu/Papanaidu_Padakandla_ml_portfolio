export const portfolio = {
  name: "PAPANAIDU PADAKANDLA",
  initials: "PP",
  headline: "Aspiring Machine Learning Engineer | AI & Data Science Enthusiast",
  location: "Bengaluru, India",
  email: "mrnaidu2920@gmail.com",
  github: "https://github.com/papanaidu",
  linkedin: "https://www.linkedin.com/in/padakandla-papanaidu-6a7a54254",
  resume: "/assets/resume.pdf",
  photo: "/assets/profile.jpg",
  availability: "Open to global opportunities",
  summary:
    "Machine Learning & Data Science graduate with hands-on experience in Python, machine-learning model development, NLP, and Power BI reporting.",
  about: [
    "I’m a Machine Learning & Data Science graduate with a B.Tech in Computer Science & Engineering (AI & ML) from PACE Institute of Technology & Sciences, completed in 2025. My hands-on experience includes three internships working on machine-learning models, predictive analysis, and data visualization.",
    "I enjoy using Python and data to solve practical problems—from building predictive models to exploring computer vision and natural language processing. I’m pursuing opportunities in software engineering, artificial intelligence, and web development, and I’m keen to keep growing as an engineer who builds useful, well-crafted products.",
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "PACE Institute of Technology & Sciences",
    completion: "2025",
    result: "6.93 / 10 CGPA",
    focus: "Artificial Intelligence & Machine Learning",
  },
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Hubble Mind Labs",
      location: "Bengaluru, Karnataka",
      description: [
        "Developed and optimized machine-learning models while contributing to real-time projects.",
        "Gained hands-on experience across the model-development lifecycle in a production-focused team.",
      ],
      technologies: ["Machine Learning", "Model Development"],
    },
    {
      role: "Data Science Intern",
      company: "42 Learn",
      description: [
        "Executed predictive modeling, data visualization, and real-life case analysis.",
      ],
      technologies: ["Predictive Modeling", "Data Visualization"],
    },
    {
      role: "Machine Learning Intern",
      company: "CodeTantra",
      description: [
        "Implemented machine-learning algorithms in Python.",
        "Collaborated on deployment-ready models.",
      ],
      technologies: ["Python", "Machine Learning"],
    },
  ],
  skills: [
    {
      title: "Programming",
      icon: "Code2",
      description: "Programming languages listed in my resume.",
      items: ["Python", "SQL"],
    },
    {
      title: "Machine Learning",
      icon: "BrainCircuit",
      description: "Machine-learning methods and specialties from my resume.",
      items: [
        "Machine Learning",
        "NLP",
        "Deep Learning",
        "Random Forest",
        "XGBoost",
        "Logistic Regression",
        "Computer Vision",
        "OpenCV",
      ],
    },
    {
      title: "Data Visualization",
      icon: "ChartNoAxesCombined",
      description: "Visualization tools listed in my resume.",
      items: ["Power BI", "Matplotlib", "Seaborn"],
    },
    {
      title: "Tools",
      icon: "WandSparkles",
      description: "AI and development tools listed in my resume.",
      items: ["Claude", "Claude Code", "Antigravity", "Codex"],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
    },
    {
      name: "AWS Certified Data Analytics – Specialty",
      issuer: "Amazon Web Services",
    },
    {
      name: "PCAP – Certified Associate Python Programmer",
      issuer: "Python Institute · Cisco",
    },
    {
      name: "Python",
      issuer: "CodeTantra",
    },
    {
      name: "AI, NLP & Deep Learning",
      issuer: "Infosys Springboard",
    },
  ],
  projects: [
    {
      number: "01",
      title: "Sign Language Detection",
      category: "Computer Vision · Accessibility",
      description:
        "A computer-vision project for detecting and interpreting sign-language gestures. Uses image-processing techniques to identify and classify hand movements.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
      features: ["Gesture recognition", "Hand-movement classification"],
      visual: "sign",
      github: "https://github.com/papanaidu/Sign-Language-Detection",
    },
    {
      number: "02",
      title: "House Price Prediction",
      category: "Machine Learning · Regression",
      description:
        "A supervised regression project that predicts house prices from dataset features, with standardization, a train/test split, and model evaluation.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Linear Regression"],
      features: ["Standardized features", "Train/test model evaluation"],
      visual: "house",
      github: "https://github.com/papanaidu/House-Price-Prediction",
    },
    {
      number: "03",
      title: "Amazon Stock Price Prediction",
      category: "Data Science · Predictive Modeling",
      description:
        "An end-to-end exploration of historical Amazon stock data, feature engineering, and linear regression evaluated with error metrics and cross-validation.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Linear Regression"],
      features: ["Exploratory analysis", "MAE · MSE · RMSE", "5-fold validation"],
      visual: "market",
      github:
        "https://github.com/papanaidu/Prediction-of-Amazon-Stock-Prices-using-Linear-Regression",
    },
  ],
};

export const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];
