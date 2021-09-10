import "./styles.css";

function StudentCard({ element }) {
  return (
    <>
      <section className={`${element.house} slide-top`}>
        <img
          src={element.image}
          alt={element.name}
          width="120px"
          heigth="120px"
        ></img>
        <p>{element.name}</p>
        <p className={`${element.house} house`}>{element.house}</p>
      </section>
    </>
  );
}

export default StudentCard;
