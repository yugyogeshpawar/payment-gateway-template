import Link from "next/link";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumb-area">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb d-flex justify-content-start">
          {breadcrumbs?.map(([itm, link], i, arr) => (
            <li
              className={`breadcrumb-item ${i === arr.length - 1 && "active"}`}
              key={itm}
            >
              {i !== arr.length - 1 ? <Link href={link}>{itm}</Link> : itm}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
