export const hello = "Hello, I'm Santito! 👋";
export const connect = "Let's Connect!";
export const layout = "layouts/main.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <div class="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="rounded-full border-8 border-currentLine shadow-xl">
          <img
            src="/static/santito.png"
            class="h-48 rounded-full sm:h-56"
            alt="Santito"
          />
        </div>
        <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
          <h1 class="text-center font-header text-4xl text-foreground sm:text-left sm:text-5xl md:text-6xl">
            {data.hello}
          </h1>
          <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
            <div class="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
              <p class="font-body text-lg uppercase text-foreground">
                {data.connect}
              </p>
              <div class="hidden sm:block">
                <i class="bx bx-chevron-right text-3xl text-red"></i>
              </div>
            </div>
            <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="https://gitlab.com/santito">
                <i class="bx bxl-gitlab text-2xl text-foreground hover:text-red">
                </i>
              </a>
              <a href="https://linkedin.com/in/santito" class="pl-4">
                <i class="bx bxl-linkedin text-2xl text-foreground hover:text-red">
                </i>
              </a>
              <a href="https://github.com/San-tito" class="pl-4">
                <i class="bx bxl-github text-2xl text-foreground hover:text-red">
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
