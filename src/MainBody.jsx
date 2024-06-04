import { faker } from "@faker-js/faker";
import Student from "./Components/Students/Student";
import StudentReview from "./Components/Students/StudentReview";
function MainBody() {
  const whatWeWillLearn = "React JS";
  const totalLectureCount = 3;
  return (
    <div style={{ minHeight: "70vh" }}>
      <p>
        In this course, we will learn {whatWeWillLearn} by building Taskopedia!{" "}
        <br></br>
      </p>
      <p>Total Lecture Count : {totalLectureCount}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
          Enter task: {" "}
          <input type= "Number" maxLength={5} readOnly= {false} placeholder="Enter"></input>
        </div> */}
      <div>
        <div className="container row">Students Enrolled</div>
        <Student
          experience={9}
          name="Nikhil Kumar"
          headshot="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview />
        </Student>
        <Student
          experience={7}
          name="Surya"
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        >
          <StudentReview />
        </Student>
        <Student
          experience={8}
          name="Somanath"
          headshot="https://api.lorem.space/image/face?w=150&h=152"
        />
      </div>
    </div>
  );
}

export default MainBody;
