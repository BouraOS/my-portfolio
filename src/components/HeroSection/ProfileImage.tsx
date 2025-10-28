import { Globe } from "lucide-react";
import { Suspense } from "react";

const ProfileImage = () => (
  <div className="hidden lg:flex justify-center lg:justify-end">
    <div className="relative">
      <figure className="w-80 h-96 lg:w-96 lg:h-[28rem] portfolio-card rounded-2xl overflow-hidden relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--portfolio-orange))] to-[hsl(var(--portfolio-orange-hover))] opacity-20"
          aria-hidden="true"
        ></div>
        <img
          src="/images/photo-profile.webp"
          alt="Bouramada Oussama - Full Stack Developer"
          width={384}
          height={448}
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </figure>

      {/* Decorative elements */}
      <div
        className="absolute -top-4 -right-4 w-20 h-20 portfolio-orange rounded-full flex items-center justify-center"
        aria-hidden="true"
      >
        <Globe size={24} />
      </div>

      <div
        className="absolute -bottom-4 -left-4 w-16 h-16 bg-[hsl(var(--portfolio-card))] border border-[hsl(var(--portfolio-border))] rounded-full flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);
const ProfileImageLoader = () => (
  <Suspense
    fallback={
      <div className="flex justify-center lg:justify-end">
        <div className="w-80 h-96 lg:w-96 lg:h-[28rem] portfolio-card rounded-2xl animate-pulse bg-[hsl(var(--portfolio-border))]" />
      </div>
    }
  >
    <ProfileImage />
  </Suspense>
);
export default ProfileImageLoader;
