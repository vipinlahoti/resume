import { Box } from "@/components/box";
import { Grid } from "@/components/grid";
import { Text } from "@/components/text";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Box size={3}>
        <Box gap={11} direction="column" className="max-w-3xl ml-auto mr-28">
          <Text variant="lead">
            With over a decade of experience in the industry, I specialize in
            building web applications using React, Next.js, and Remix.run. My
            journey began with GraphQL, and I now use Prisma ORM for efficient
            database management.
          </Text>
          <Text variant="lead">
            I have gained a deep understanding of modern web development
            frameworks, which enables me to create dynamic, fast, and
            user-friendly web applications.
          </Text>
        </Box>
      </Box>

      <Box>
        <Text as="h2" className="mx-24">
          My Value to Your Projects...
        </Text>
      </Box>
      <Box size={3} direction="column">
        <Grid gap={6} column={2}>
          <div className="p-10 bg-secondary rounded-3xl">
            <Text variant="lead">
              I bring over a decade of experience and proficiency in React,
              Next.js, and Remix.run, ensuring the creation of high-quality,
              reliable web applications.
            </Text>
          </div>
          <div className="p-10 bg-secondary rounded-3xl">
            <Text variant="lead">
              I stay up-to-date with the latest technologies and industry
              trends, constantly enhancing my knowledge and skills.
            </Text>
          </div>
          <div className="p-10 bg-secondary rounded-3xl">
            <Text variant="lead">
              I ensure that every aspect of my work is polished and error-free,
              delivering a final product of the highest quality.
            </Text>
          </div>
          <div className="p-10 bg-secondary rounded-3xl">
            <Text variant="lead">
              I maintain clear and open communication throughout the development
              process, keeping all stakeholders informed and engaged.
            </Text>
          </div>
        </Grid>
      </Box>
      <Box size={3}>
        <Box gap={8} direction="column" className="max-w-3xl ml-auto mr-28">
          <Text variant="lead">
            When I&apos;m not coding, I enjoy sketching. Drawing is a creative
            outlet for me, offering a different form of expression and a way to
            unwind.
          </Text>
          <div>
            <Text variant="lead">
              Ready? Let&apos;s build something amazing together!
            </Text>
            <Text variant="muted">
              Write an email to{" "}
              <a
                href="mailto:hi@vipinlahoti.com"
                className="text-primary underline-offset-4 underline"
              >
                hi@vipinlahoti.com
              </a>
            </Text>
          </div>
        </Box>
      </Box>
    </>
  );
}
