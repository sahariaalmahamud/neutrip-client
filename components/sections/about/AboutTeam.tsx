import React from 'react';
import { MOCK_TEAM } from '@/constants/about';
import { Card } from '@heroui/react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export function AboutTeam() {
  return (
    <section className="py-8 w-full text-left">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Creative Minds
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mt-1">
          Meet Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {MOCK_TEAM.map((member) => (
          <Card
            key={member.id}
            className="glass-card p-5 border border-border/80 rounded-2xl bg-surface/30 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-primary/20"
          >
            {/* Header info */}
            <div className="flex items-center gap-4 text-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover border border-border"
                loading="lazy"
              />
              <div>
                <h3 className="font-extrabold text-sm md:text-base text-foreground leading-tight">
                  {member.name}
                </h3>
                <span className="text-[10px] font-bold text-primary block mt-0.5 leading-none">
                  {member.role}
                </span>
              </div>
            </div>

            {/* Bio text */}
            <p className="text-xs text-muted leading-relaxed flex-grow">
              {member.bio}
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-3 pt-3 border-t border-border/40 text-muted">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              )}

              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                  aria-label={`${member.name} GitHub`}
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}

              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                  aria-label={`${member.name} Twitter`}
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
