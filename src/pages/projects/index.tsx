import Card from '@/components/Card';
import CustomLink from '@/components/CustomLink';
import { projectConfig } from '@/configs/projectConfig';

function Projects() {
  return (
    <main className="mb-20 flex-1 px-4 sm:px-8 md:mx-auto md:w-full md:max-w-4xl">
      <section className="flex flex-col gap-10 px-8 py-20">
        <h1>設計作品</h1>
        <p>
          這些是我曾參與過的專案，有些是自己完成，有些是與團隊一起協作。在不同的專案中，我獲得不同的學習、反思與成長。
        </p>
      </section>
      <section
        id="projects"
        className="mb-10 flex flex-col items-center gap-10 pt-10 sm:mb-20 sm:pt-14"
      >
        <h2 className="mb-10">一起來看看我的 UI/UX 設計吧</h2>
        {projectConfig.map((project) => {
          return <Card key={project.id} {...project} />;
        })}
      </section>
    </main>
  );
}

export default Projects;
