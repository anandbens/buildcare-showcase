import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryProvider, FloatingEnquiryButton } from "@/components/EnquiryDialog";
import { FloatingContactMenu } from "@/components/FloatingContactMenu";


function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >Try again</button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chennai Buildcare Technologies — Innovative Concrete Solutions Since 1998" },
      {
        name: "description",
        content:
          "25 years of waterproofing, epoxy & PU flooring, concrete grinding & polishing, repair & retrofitting and grouting expertise across India.",
      },
      { property: "og:title", content: "Chennai Buildcare Technologies — Innovative Concrete Solutions Since 1998" },
      { property: "og:description", content: "Buildcare Showcase is a modern corporate website for Chennai Buildcare Technologies, highlighting their construction chemical services and projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chennai Buildcare Technologies — Innovative Concrete Solutions Since 1998" },
      { name: "description", content: "Buildcare Showcase is a modern corporate website for Chennai Buildcare Technologies, highlighting their construction chemical services and projects." },
      { name: "twitter:description", content: "Buildcare Showcase is a modern corporate website for Chennai Buildcare Technologies, highlighting their construction chemical services and projects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5f7acedd-5d4d-40ea-aba1-112363601f17/id-preview-8ff41701--d13db92e-64c1-4d3f-bb32-065e5e7e11f1.lovable.app-1779806709580.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5f7acedd-5d4d-40ea-aba1-112363601f17/id-preview-8ff41701--d13db92e-64c1-4d3f-bb32-065e5e7e11f1.lovable.app-1779806709580.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <EnquiryProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <FloatingEnquiryButton />
          <FloatingContactMenu />

        </div>
      </EnquiryProvider>
    </QueryClientProvider>
  );
}
