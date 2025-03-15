import Link from "next/link";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";

interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
    name: string;
    url: string;
}

export const TeamSection = () => {
    const teamList: TeamProps[] = [
        {
            imageUrl:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            firstName: "Leo",
            lastName: "Miranda",
            positions: ["Vue Fronted Developer", "Creator Of This Website"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "Github",
                    url: "https://github.com/leoMirandaa",
                },
                {
                    name: "X",
                    url: "https://x.com/leo_mirand4",
                },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            firstName: "Elizabeth",
            lastName: "Moore",
            positions: ["UI/UX Designer"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "X",
                    url: "https://x.com/leo_mirand4",
                },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            firstName: "David",
            lastName: "Diaz",
            positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "Github",
                    url: "https://github.com/leoMirandaa",
                },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            firstName: "Sarah",
            lastName: "Robinson",
            positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "Github",
                    url: "https://github.com/leoMirandaa",
                },
                {
                    name: "X",
                    url: "https://x.com/leo_mirand4",
                },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            firstName: "Michael",
            lastName: "Holland",
            positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            firstName: "Zoe",
            lastName: "Garcia",
            positions: ["JavaScript Evangelist", "Deno Champion"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "Github",
                    url: "https://github.com/leoMirandaa",
                },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            firstName: "Evan",
            lastName: "James",
            positions: ["Backend Developer"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "Github",
                    url: "https://github.com/leoMirandaa",
                },
                {
                    name: "X",
                    url: "https://x.com/leo_mirand4",
                },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            firstName: "Pam",
            lastName: "Taylor",
            positions: ["Fullstack Developer", "UX Researcher"],
            socialNetworks: [
                {
                    name: "X",
                    url: "https://x.com/leo_mirand4",
                },
            ],
        },
    ];

    const socialIcon = (socialName: string) => {
        switch (socialName) {
            case "LinkedIn":
                return <LinkedInIcon />;
            case "Github":
                return <GithubIcon />;
            case "X":
                return <XIcon />;
        }
    };

    return (
        <section id="team" className="container py-24 sm:py-32 lg:w-[75%]">
            <div className="mb-8 text-center">
                <h2 className="mb-2 text-center text-lg tracking-wider text-primary">Team</h2>

                <h2 className="text-center text-3xl font-bold md:text-4xl">The Company Dream Team</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teamList.map(({ imageUrl, firstName, lastName, positions, socialNetworks }) => (
                    <Card
                        key={firstName + lastName}
                        className="group/hoverimg flex h-full flex-col overflow-hidden bg-muted/60 dark:bg-card"
                    >
                        <CardHeader className="gap-0 p-0">
                            <div className="h-full overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="aspect-square size-full w-full object-cover saturate-0 transition-all duration-200 ease-linear group-hover/hoverimg:scale-[1.01] group-hover/hoverimg:saturate-100"
                                />
                            </div>
                            <CardTitle className="px-6 py-6 pb-4">
                                {firstName}
                                <span className="ml-2 text-primary">{lastName}</span>
                            </CardTitle>
                        </CardHeader>
                        {positions.map((position, index) => (
                            <CardContent
                                key={position}
                                className={`pb-0 text-muted-foreground ${index === positions.length - 1 ? "pb-6" : ""}`}
                            >
                                {position}
                                {index < positions.length - 1 && <span>,</span>}
                            </CardContent>
                        ))}

                        <CardFooter className="mt-auto space-x-4">
                            {socialNetworks.map(({ name, url }, index) => (
                                <Link
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    className="transition-all hover:opacity-80"
                                >
                                    {socialIcon(name)}
                                </Link>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
