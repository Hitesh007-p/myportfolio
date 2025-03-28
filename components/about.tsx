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
              Hello! I'm <span className="font-semibold hover:text-blue-400 transition-colors duration-300">Hitesh Patil</span>, a passionate Flutter developer with a keen interest in creating beautiful and
              functional mobile applications. My journey in app development started with a creating
              seamless user experiences across different platforms.
            </p>
            <p className="hover:text-foreground hover:translate-y-1 p-4 rounded-lg hover:shadow-lg transition-all duration-300">
              I'm passionate about using Flutter to create smooth, high-performing apps that look great and solve real-world problems. When I'm not coding, I'm usually exploring new mobile development trends
            </p>
          </div>
        </div>
      </section>
    );
  }
  