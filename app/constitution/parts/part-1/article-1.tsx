export const article1 = {
  number: "1",
  title: "Name and territory of the Union",
  href: "/constitution/articles/1",
};

export default function Article1() {
  return (
    <article>
      <h2>1. Name and territory of the Union.—</h2>

      <p>
        (1) India, that is Bharat, shall be a Union of States.
      </p>

      <p>
        (2) The States and the territories thereof shall be
        as specified in the First Schedule.
      </p>

      <p>
        (3) The territory of India shall comprise—
      </p>

      <div className="pl-5 space-y-2">
        <p>(a) the territories of the States;</p>

        <p>
          (b) the Union territories specified in the First
          Schedule; and
        </p>

        <p>
          (c) such other territories as may be acquired.
        </p>
      </div>
    </article>
  );
}