import { lazy, Suspense } from "react";
import SocialLinks from "./SocialLinks";
const ProfileImage = lazy(() =>
  Promise.resolve({ default: ProfileImageComponent })
);

function ProfileImageComponent() {
  return (
    <figure className="relative mb-8">
      <div className="w-64 h-64 rounded-full portfolio-card overflow-hidden relative border-4 border-[hsl(var(--portfolio-orange))]">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--portfolio-orange))] to-[hsl(var(--portfolio-orange-hover))] opacity-20"
          aria-hidden="true"
        ></div>
        <img
          loading="lazy"
          src="/images/photo-profile.webp"
          alt="Bouramada Oussama - Full Stack Developer portrait"
          width={256}
          height={256}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </figure>
  );
}
const ProfileSidebar = ({ socialLinks }) => (
  <aside className="flex flex-col items-center lg:items-start">
    <Suspense
      fallback={
        <div className="w-64 h-64 rounded-full portfolio-card animate-pulse bg-[hsl(var(--portfolio-border))] mb-8" />
      }
    >
      <ProfileImage />
    </Suspense>
    <SocialLinks links={socialLinks} />
  </aside>
);

export default ProfileSidebar;
