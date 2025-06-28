type Props = {
  period: string;
  title: string;
  school: string;
  feedback: string;
};
export default function JobCard({ period, title, school, feedback }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 md:flex-row">
      <div className="font-noto-sans text-secondary04 basis-1/5 text-[11px] font-medium">
        {period}
      </div>
      <section className="flex basis-4/5 flex-col gap-2">
        <div className="flex flex-col gap-4 md:flex-row">
          <h3 className="text-secondary05">{title}</h3>
          <h3 className="text-secondary05">{school}</h3>
        </div>
        <p>{feedback}</p>
      </section>
    </div>
  );
}
