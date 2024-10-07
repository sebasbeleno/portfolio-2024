import TransfirioBackgroundImage from "/public/transfirioCardBackground.png";
import TransfirioMock from "/public/transfirioMock.png";
import TransfirioLogo from "/public/transfirioLogo.png";

import MonyBackgroundImage from "/public/monyCardBackground.png";
import MonyMock from "/public/monyMock.png";
import MonyLogo from "/public/monyLogo.png";
import ReportLogo from "/public/reportLogo.png";

import ReportBackoundImage from "/public/reportCardBackground.png";
import type { ProjectCardsProps } from "./components/ProjectCard.astro";

interface ContentType {
  projects: ProjectCardsProps[];
}

const content: ContentType = {
  projects: [
    {
      backgroundImage: TransfirioBackgroundImage,
      logo: TransfirioLogo,
      image: TransfirioMock,
      projectTitle: "Transfirio",
      projectShortDesc:
        "Transfirio uses machine learning to automatically process bank transfer confirmations",
      longDesc:
        "Transfirio is an app that allows store owners in Colombia to keep track of payments made through bank transfers. Using machine learning and computer vision, we detect the data related to the transfer in the confirmation receipt. Store owners can generate reports, manage cashiers, and generate transfer confirmation alarms once the money is reflected.",
      coomingSoon: true,
    },
    {
      backgroundImage: MonyBackgroundImage,
      logo: MonyLogo,
      image: MonyMock,
      projectTitle: "Mony",
      projectShortDesc: "Personal finance manager app",
      longDesc: `With Mony, users can keep track of expenses, income, debts, recurring payments, credit cards, savings and more.
They will be able to create alerts about future payments, expense warning alerts, create savings goals and schedule savings reminders and more.
`,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.monyapp",
      appStoreUrl: "https://apps.apple.com/us/app/mony/id1576692830",
    },
    {
      backgroundImage: ReportBackoundImage,
      logo: ReportLogo,
      projectTitle: "Report",
      projectShortDesc: "League of Legends Open Source Data platform",
      longDesc:
        "Report is an open-source platform that allows users to access data from League of Legends. Report provides users with access to a wide range of data, including match history, player statistics, and more.",
      githubUrl: "https://github.com/sebasbeleno/",
    },
  ],
};

export default content;
