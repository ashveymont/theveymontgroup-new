"use client";

import React from 'react';
import {
	LinkedinIcon,
	InstagramIcon,
} from 'lucide-react';
import Image from 'next/image';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'Our Mission',
			href: '#',
		},
		{
			title: 'Portfolios',
			href: '#portfolios',
		},
		{
			title: 'Founder',
			href: '#founder',
		},
		{
			title: 'Partner With Us',
			href: '#partner-contact',
		},
	];

	const resources = [
		{
			title: 'Mytosis',
			href: 'https://mytosis.io/',
		},
		{
			title: 'Manasa',
			href: 'https://feelmanasa.com/',
		},
		{
			title: 'Investment Inquiry',
			href: '#partner-contact',
		},
		{
			title: 'Contact',
			href: '#partner-contact',
		},
	];

	const socialLinks = [
		{
			icon: <LinkedinIcon className="size-4" />,
			link: 'https://www.linkedin.com/company/the-veymont-group/',
		},
		{
			icon: <InstagramIcon className="size-4" />,
			link: 'https://www.instagram.com/theveymontgroup/',
		},
	];

	return (
		<footer className="relative bg-black text-white">
			{/* Hero-style background with subtle effects */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />
			
			<div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
				{/* Top border */}
				<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
				
				<div className="grid grid-cols-1 md:grid-cols-6 gap-8 pt-4 pb-16">
					{/* Brand Section */}
					<div className="md:col-span-3 relative flex flex-col">
						{/* Logo positioned behind text */}
						<div className="absolute inset-0 flex items-center justify-start pointer-events-none">
							<Image
								src="/2.svg"
								alt="The Veymont Group"
								width={600}
								height={180}
								className="h-32 md:h-40 lg:h-48 w-auto opacity-20 drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)] -ml-8 mt-56"
								priority
							/>
						</div>
						
						{/* Text content above logo */}
						<div className="relative z-10 flex flex-col gap-6 mb-6">
							<p 
								className="text-slate-100 max-w-sm text-base leading-relaxed font-medium"
								style={{ fontFamily: "'Inter', sans-serif" }}
							>
								Engineering a dharmic legacy for the next generation through technology and timeless wisdom.
							</p>
							<div className="flex gap-3">
								{socialLinks.map((item, i) => (
									<a
										key={i}
										className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30"
										target="_blank"
										rel="noopener noreferrer"
										href={item.link}
									>
										{item.icon}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Navigation Sections */}
					<div className="md:col-span-1.5">
						<h4 
							className="text-white font-semibold mb-4 text-lg"
							style={{ fontFamily: "'Playfair Display', serif" }}
						>
							Company
						</h4>
						<div className="flex flex-col gap-2">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className="text-slate-300 hover:text-white py-1 text-sm transition-colors duration-200"
									style={{ fontFamily: "'Inter', sans-serif" }}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>

					<div className="md:col-span-1.5">
						<h4 
							className="text-white font-semibold mb-4 text-lg"
							style={{ fontFamily: "'Playfair Display', serif" }}
						>
							Portfolio
						</h4>
						<div className="flex flex-col gap-2">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className="text-slate-300 hover:text-white py-1 text-sm transition-colors duration-200"
									style={{ fontFamily: "'Inter', sans-serif" }}
									href={href}
									target={href.startsWith('http') ? '_blank' : undefined}
									rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom border */}
				<div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
				
				{/* Copyright */}
				<div className="py-6 text-center">
					<p 
						className="text-slate-400 text-sm"
						style={{ fontFamily: "'Inter', sans-serif" }}
					>
						© {year} The Veymont Group. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
