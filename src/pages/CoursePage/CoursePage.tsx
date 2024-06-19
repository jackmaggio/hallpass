import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PeriodDisplay from "../../components/CourseDisplay/CourseDisplay";
import StudentDisplay from "../../components/StudentDisplay/StudentDisplay";
import "./CoursePage.css";
import TimeslipTable from "../../components/TimeslipTable/TimeslipTable";

function CoursePage() {
  return (
    <Fragment>
      <Navbar />
      <div className="coursepage-display-wrapper bg-gray-50">
        <PeriodDisplay />
        <StudentDisplay />
        <div className="table-display-wrapper">
          <TimeslipTable />
        </div>
      </div>
    </Fragment>
  );
}

export default CoursePage;
