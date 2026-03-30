export default function IntroductionForm() {
  return (
    <>
      <section>
        <h1>Alana's Charlotte Website</h1>
        <hr />
        <h2>Introduction Form</h2>
      </section>

      <main>
        <h3>Please complete the form below! :)</h3>

        <form id="introForm">
          <label>First Name:</label>
          <input type="text" id="firstName" defaultValue="Alana" placeholder="First Name" required />

          <label>Middle Name:</label>
          <input type="text" id="middleName" placeholder="Middle Name" />

          <label>Last Name:</label>
          <input type="text" id="lastName" defaultValue="Green" placeholder="Last Name" required />

          <br /><br />

          <label>Mascot Adjective:</label>
          <input type="text" id="adjective" defaultValue="Ambitious" required />

          <label>Mascot Animal:</label>
          <input type="text" id="animal" defaultValue="Gecko" required />

          <br /><br />

          <label>Picture:</label>
          <input type="text" id="image" defaultValue="itis3135/images/kittyyy.jpg" placeholder="Image path" />

          <label>Picture Caption:</label>
          <input type="text" id="caption" defaultValue="Photo of daughter, Kizzle." required />

          <br /><br />

          <label>Personal Statement:</label>
          <textarea id="statement" defaultValue="Hi! I am a senior studying Computer Science with a focus in data science. I enjoy getting to know people and making data look pretty through PowerBI and Python." required />

          <br /><br />

          <label>Personal Background:</label>
          <textarea id="personalBackground" defaultValue="Hi!! I’m from South Carolina and outside of computer science, I love fashion, cats, and Japanese." />

          <br /><br />

          <h3>Courses</h3>
          <ul id="courseList">
            <li><input type="text" className="course" defaultValue="ITIS 3135 – Front-End Web Application Development: Sounds fun." /></li>
            <li><input type="text" className="course" defaultValue="ITCS 3153 – Intro to Artificial Intelligence" /></li>
            <li><input type="text" className="course" defaultValue="ITCS 3156 – Intro to Machine Learning" /></li>
            <li><input type="text" className="course" defaultValue="ITCS 3190 – Intro to Cloud Computing" /></li>
            <li><input type="text" className="course" defaultValue="ITSC 4155 – Software Development Projects" /></li>
          </ul>

          <button type="button" id="addCourse">Add Course</button>

          <br /><br />

          <label>Quote:</label>
          <textarea id="quote" defaultValue="I’m whatever you want me to be, Lieutenant. A partner, buddy to drink with, or just a machine…" />

          <label>Quote Author:</label>
          <input type="text" id="quoteAuthor" defaultValue="Connor, 2018" />

          <br /><br />

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button type="button" id="clearBtn">Clear</button>
          <button type="button" id="generateHTML">Generate HTML</button>
          <button type="button" id="generateJSON">Generate JSON</button>
        </form>
      </main>
    </>
  );
}