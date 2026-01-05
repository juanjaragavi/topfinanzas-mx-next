import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ActionBannerProps {
  href: string;
  src: string;
  alt: string;
  className?: string;
}

export function ActionBanner({ href, src, alt, className }: ActionBannerProps) {
  return (
    <div className={cn("w-full my-6 md:my-8", className)}>
      <Link href={href} className="block w-full">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={400}
          className="w-full h-auto block"
        />
      </Link>
    </div>
  );
}
