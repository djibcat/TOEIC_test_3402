import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <h1 className="text-center">Welcome to the Toiec test ! </h1>
        <p className="mt-5">
          Now more than ever, English proficiency is a necessity in the global
          work environment. Whether you are an individual who wants to stand out
          against the competition or an organization seeking to build a more
          skilled team or prepare work-ready students, the TOEIC® program can
          help you achieve your goal. As the industry leader, the TOEIC program
          has set the standard for assessing English-language skills needed in
          the workplace for more than 40 years. The TOEIC tests are the most
          widely used around the world, with 14,000+ organizations across more
          than 160 countries trusting TOEIC scores to make decisions.
        </p>
        <h4 className="mt-5">A Listening test </h4>
        <p>
          Proven. Reliable. Trusted Worldwide. The TOEIC® Listening and Reading
          test measures the everyday English listening and reading skills needed
          to work in an international environment. Test questions simulate
          real-life situations that are relevant to the global workplace. TOEIC
          Listening and Reading scores provide meaningful feedback about a test
          taker's strengths and weaknesses, along with a description of the
          skills typical of test takers at various levels. Learn more about what
          the TOEIC Listening and Reading test can do for you.{" "}
          <a href="https://www.ets.org/toeic/listening-reading">Here</a>
        </p>
        <h4 className="mt-5">A Writting test </h4>
        <p>
          Proven. Reliable. Trusted Worldwide. The TOEIC® Writing tests provide
          an accurate assessment of an individual's ability to communicate in
          spoken and written English in the workplace. TOEIC Writing scores
          provide meaningful feedback about a test taker's strengths and
          weaknesses, along with a description of the skills typical of test
          takers at various levels. Learn more about what the TOEIC Speaking and
          Writing tests can do for you.{" "}
          <a href="https://www.ets.org/toeic/speaking-writing">Here</a>
        </p>

        <p className="mt-5">
          Do you want to have more information about the TOEIC test ? Click{" "}
          <a href="https://www.ets.org/toeic">this</a> link !
        </p>
      </div>
    </React.Fragment>
  );
}
