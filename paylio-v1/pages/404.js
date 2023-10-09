import ErrorBody from "@/components/error/ErrorBody";

export default function Error() {
  return (
    <>
      {/* Error Body Section */}
      <ErrorBody />
    </>
  );
}

Error.getLayout = function getLayout(page) {
  return <>{page}</>;
};
