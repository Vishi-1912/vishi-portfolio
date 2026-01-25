import styles from "@/styles/about.module.css";
import { Database, Globe } from "lucide-react";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="flex">

        {/* Left Section */}
        <div className="w-1/3">
          <h1 className={styles.aboutTitle1}>About</h1>
          <h1 className={styles.aboutTitle2}>Me</h1>
          <hr />
          <p>
            Software Engineer with 2+ years of experience in MEAN/MERN stack
            development, specializing in Node.js and NestJS backend systems.
            Experienced in designing scalable REST APIs, managing relational and
            NoSQL databases, and implementing secure authentication flows.
          </p>
        </div>

        {/* Right Section */}
        <div className={styles.aboutRight}>
          <h2>
            "I enjoy working on backend-heavy problems with
            clean system architecture, and performance optimization while being
            comfortable contributing to frontend features using React and Angular."
          </h2>

          <div className={styles.aboutBottom}>
            <div className="w-1/2">
              <h6><Database style={{ color: "#556a8d" }} size={24} /> System Architecture</h6>
              <p>I specialize in designing robust architectures that handle complex business logic and high-volume data processing. Efficiency is not just a goal; it's the standard.</p>
            </div>
            <div className="w-1/2">
              <h6><Globe style={{ color: "#556a8d" }} size={24} /> Full Stack Integration</h6>
              <p>With a strong foundation in full-stack development, I ensure seamless integration and optimal performance across the entire technology stack, from database to UI.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

//  <h2>About Me</h2>

//       <p>
//         Software Engineer with 2+ years of experience in MEAN/MERN stack
//         development, specializing in Node.js and NestJS backend systems.
//         Experienced in designing scalable REST APIs, managing relational and
//         NoSQL databases, and implementing secure authentication flows.
//       </p>

//       <p>
//         I enjoy working on backend-heavy problems involving data modeling,
//         performance optimization, and clean system architecture, while being
//         comfortable contributing to frontend features using React and Angular
//         when required.
//       </p>