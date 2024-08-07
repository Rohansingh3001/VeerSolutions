import { useState } from "react";
const NodeJsTHREE = () => {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: "Real-time applications",
      content:
        "Node.js is perfect for crafting real-time collaborative applications such as chat platforms, gaming servers, and live event streaming services. Its event-driven, non-blocking I/O model allows for high performance and low latency, making it suitable for applications that need real-time data transfer and synchronization.",
    },
    {
      title: "Scalable web applications",
      content:
        "For high-traffic, scalable web applications including social media platforms, e-commerce websites, and content streaming services, Node.js truly excels. Its asynchronous nature handles concurrent requests efficiently, ensuring robustness and high throughput even under heavy load.",
    },
    {
      title: "Microservices architecture",
      content:
        "By using Node.js, you can effectively build microservices-based architectures. These architectures allow for the development of modular, independent services, which can scale independently and enhance application maintainability and flexibility.",
    },
    {
      title: "API development",
      content:
        "Node.js facilitates the creation of robust and efficient APIs that underpin mobile apps, web services, and third-party integrations. Its speed, scalability, and efficient data handling make it ideal for building high-performing APIs.",
    },
    {
      title: "Single-page applications",
      content:
        "Node.js integrates seamlessly with front-end frameworks like React to build fast, responsive SPAs. Its efficient backend operations provide a seamless user experience, enhancing overall web performance and user engagement.",
    },
    {
      title: "IoT applications",
      content:
        "Node.js's lightweight nature and event-driven model make it an excellent choice for developing scalable and efficient IoT applications. Its ability to handle a large number of concurrent connections with low resource requirements is particularly suited to IoT devices, which often have limitations in processing power and memory.",
    },
  ];

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className="py-12 border-t m-16 md:m-28 border-gray-800 md:py-16 ">
      <div className="flex md:gap-x-80 gap-x-10 mx-20 my-5 items-center flex-col md:flex-row ">
        <div className="max-w-xl min-w-lg flex justify-center ">
          <img
            src="https://www.lexis.solutions/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5gydaotbo8jm%2F6leqvCo1o3iebzKZxTTivj%2F01238478d0054648bc8fcbf36fafe57c%2Fbusinessman.png%3Ffm%3Dwebp&w=384&q=75"
            alt="Thinking"
            className="min-w-20 md:max-w-lg "
          />
        </div>

        <div className="flex flex-col gap-10 md:gap-20 ">
          <h2 className="text-md md:text-4xl font-semibold mt-5">
            In what projects does React fit best?
          </h2>
          <ul className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer text-sm md:text-2xl p-2 border-b my-0 md:my-2 gap-2"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-xs md:text-2xl font-medium">
                    {project.title}
                  </p>

                  <span className="md:text-3xl text-xs font-semibold ">
                    {expanded === index ? "-" : "+"}
                  </span>
                </div>
                {expanded === index && (
                  <div className=" p-5 md:max-w-xl max-w-md ">
                    <p className="text-xs md:text-lg">{project.content}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NodeJsTHREE;
