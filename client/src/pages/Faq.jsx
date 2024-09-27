import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is Learnio?",
      answer:
        "Learnio is an online platform created to help college students share and access educational resources. Users can upload and download various study materials, including notes, presentations, and study guides.",
    },
    {
      question: "How do I get started with Learnio?",
      answer:
        "Getting started is easy—just sign up for an account on the platform. Once you're registered, you can begin uploading your own study materials or browse and download resources shared by fellow students.",
    },
    {
      question: "Is Learnio free to use?",
      answer:
        "Yes, Learnio is completely free to use. Our goal is to make education available to everyone, so the platform is open to all students with no subscription charges.",
    },
    {
      question: "Are my documents secure on Learnio?",
      answer:
        "Absolutely. We prioritize the security and privacy of your documents. Learnio employs advanced encryption and security measures to ensure the confidentiality of your uploaded materials.",
    },
    {
      question: "Can I upload any type of document on Learnio?",
      answer:
        "Absolutely. We place a high priority on the security and privacy of your documents. Learnio uses advanced encryption and robust security protocols to protect the confidentiality of your uploaded materials.",
    },
    {
      question: "How can I search for specific study materials on Learnio?",
      answer:
        "Use the platform's search bar to find specific study materials. Simply type in keywords, subjects, or topics to quickly locate relevant documents.",
    },
    {
      question:
        "Can I collaborate with other students on projects using Learnio?",
      answer:
        "Absolutely. Learnio offers real-time collaboration tools, allowing you to work on group projects and assignments with your peers. Share, edit, and collaborate seamlessly.",
    },
    {
      question: "Is there a limit to the file size I can upload?",
      answer:
        "Currently, there is a file size limit for uploads. Please refer to the platform's guidelines for specific details on file size limitations.",
    },
    {
      question: "How can I provide feedback on a document?",
      answer:
        "Each document on Learnio comes with a feedback and rating section. You can share your thoughts, ask questions, or provide feedback on the quality of the material.",
    },
  ];
  return (
    <div className="lg:h-heightWithoutNavbar grid place-content-center">
      <div className="mx-auto max-w-[1550px] px-5 py-8">
        <h1 className="mb-6 text-3xl font-black">Frequently Asked Questions</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((item, i) => (
            <div key={i} className="">
              <h1 className="mb-2 text-lg font-medium sm:text-xl">
                {item.question}
              </h1>
              <p className="border-b pb-2 text-sm text-gray-700 sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
