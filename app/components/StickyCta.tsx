'use client';

import { MessageSquare, FileText } from 'lucide-react';
import { site } from '../../lib/site';
import { track } from '../../lib/analytics';

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 p-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`sms:${site.phoneTel}`}
          onClick={() => track('phone_click', { placement: 'sticky_sms' })}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-medium text-white"
        >
          <MessageSquare className="h-4 w-4 text-[#00ff9f]" />
          Text
        </a>
        <a
          href="/contact"
          onClick={() => track('cta_click', { placement: 'sticky_scope', href: '/contact' })}
          className="btn-primary flex-1 !py-3"
        >
          <FileText className="h-4 w-4" />
          Request scope
        </a>
      </div>
    </div>
  );
}
