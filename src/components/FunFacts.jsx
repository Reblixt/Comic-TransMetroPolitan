const random = Math.floor(Math.random() * 3);

export const FunFacts = ({ author }) => {
  return (
    <div>
      <p> {author[random].line} </p>
    </div>
  );
};
