const Header = ({ courseName }) => <h2>{courseName}</h2>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Course = ({ course }) => (
  <div>
    <Header courseName={course.name} />
    <Content parts={course.parts} />
  </div>
)

export default Course
