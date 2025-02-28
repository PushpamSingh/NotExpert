import './PagesCss/CoursesPlace.css';
import course from '../ApiJson/Courses.json';
import { CourseCard } from './UI/CourseCard';
import { ImportantLink } from './UI/ImportantLink';

export const Courses=()=>{
    return (<>
    <section className="course-section">
        <section className="course-top-section">
            <div className="course-top-section-div">
                <h1>Our Courses & Study Materials</h1>
                <p>Comprehensive study materials and resources for various computer science programs</p>
            </div>
        </section>

        <section className="CourseMaterial-section">
            <div className="CourseMaterial-section-div">
                {
                    course.map((curr)=>{
                        return <CourseCard currEle={curr}/>
                    })
                }
                  
            </div>

        </section>

            <ImportantLink/>

    </section>
    </>)
}