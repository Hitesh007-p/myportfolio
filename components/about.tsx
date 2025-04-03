export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 hover:bg-gradient-to-t hover:from-secondary/10 hover:to-transparent transition-all duration-300 group"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center hover:scale-105 transition-transform duration-300">
          About Me
        </h2>
        <div className="space-y-4 text-foreground/80">
          <p className="hover:text-foreground hover:translate-y-1 p-4 rounded-lg hover:shadow-lg transition-all duration-300">
            I am a <span className="font-semibold hover:text-blue-400 transition-colors duration-300">Flutter & Python Developer</span> with hands-on experience in mobile app development, API integrations, and UI/UX implementation.
            Successfully completed an Internship at <span className="font-semibold hover:text-blue-400 transition-colors duration-300">MR Network Web Solution</span> as a Junior Flutter Android App Developer, contributing to feature development, debugging, and optimization.
          </p>
          <p className="hover:text-foreground hover:translate-y-1 p-4 rounded-lg hover:shadow-lg transition-all duration-300">
            Additionally, I have worked on basic Python projects, including <span className="font-semibold hover:text-blue-400 transition-colors duration-300">Elina</span>, a personal assistant with speech recognition and automation.
            I am passionate about AI-driven solutions, real-time applications, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}
