type Props = {
  period: string;
  jobTitle: string;
  company: string;
  feedback: string;
  achievements: string[];
};
export default function JobCard({
  period,
  jobTitle,
  company,
  feedback,
  achievements,
}: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 md:flex-row">
      <div className="font-noto-sans text-secondary04 basis-1/5 text-[11px] font-medium">
        {period}
      </div>
      <section className="flex basis-4/5 flex-col gap-2">
        <div className="flex flex-col gap-4 md:flex-row">
          <h3 className="text-secondary05">{jobTitle}</h3>
          <h3 className="text-secondary05">{company}</h3>
        </div>
        <p>{feedback}</p>
        <ul className="list-disc">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
