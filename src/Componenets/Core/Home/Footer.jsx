import { FaFacebookF, FaGoogle, FaTwitch, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1932] text-gray-400">
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12">

          {/* LOGO + COMPANY */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                S
              </div>
              <span className="text-white text-xl font-semibold">
                StudyNotion
              </span>
            </div>

            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Affiliates"].map(item => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-white text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-6 text-xl text-gray-300">
              <FaFacebookF />
              <FaGoogle />
              <FaTwitch />
              <FaYoutube />
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              {[
                "Articles",
                "Blog",
                "Chart Sheet",
                "Code challenge",
                "Docs",
                "Projects",
                "Videos",
                "Workspaces",
              ].map(item => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-white text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* PLANS + COMMUNITY */}
          <div>
            <h4 className="text-white font-semibold mb-3">Plans</h4>
            <ul className="space-y-2 mb-6">
              {[
                "Paid memberships",
                "For students",
                "Business solutions",
              ].map(item => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-white text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-3">Community</h4>
            <ul className="space-y-2">
              {["Forums", "Chapters", "Events"].map(item => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-white text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBJECTS */}
          <div>
            <h4 className="text-white font-semibold mb-3">Subjects</h4>
            <ul className="space-y-2">
              {[
                "AI",
                "Cloud Computing",
                "Code Foundations",
                "Computer Science",
                "Cybersecurity",
                "Data Analytics",
                "Data Science",
                "Data Visualization",
                "Developer Tools",
                "DevOps",
                "Game Development",
                "IT",
                "Machine Learning",
                "Math",
                "Mobile Development",
                "Web Design",
                "Web Development",
              ].map(item => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-white text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* LANGUAGES */}
          <div>
            <h4 className="text-white font-semibold mb-3">Languages</h4>
            <ul className="space-y-2">
              {[
                "Bash",
                "C++",
                "C#",
                "Go",
                "HTML & CSS",
                "Java",
                "JavaScript",
                "Kotlin",
                "PHP",
                "Python",
                "R",
                "Ruby",
                "SQL",
                "Swift",
              ].map(item => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-white text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-6 text-sm">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-6">
            {["Privacy policy", "Cookie Policy", "Terms"].map(item => (
              <button
                key={item}
                type="button"
                className="hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
          <p>© 2025 StudyNotion</p>
        </div>
      </div>
    </footer>
  );
}
