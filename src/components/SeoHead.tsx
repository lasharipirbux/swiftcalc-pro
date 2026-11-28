import React, { useEffect } from 'react';
import { CalculatorItem } from '../types';
import { categories } from '../data/calculatorsData';
import { SITE_URL, SITE_NAME } from '../config/site';
import { getCalculatorSlug } from '../utils/slugs';

export type StaticPageId = 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';

interface SeoHeadProps {
  currentPath: string;
  activeCalculator: CalculatorItem | null;
  selectedCategory: string | null;
  staticPage: StaticPageId | null;
  isNotFound: boolean;
  totalCalculators: number;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  currentPath,
  activeCalculator,
  selectedCategory,
  staticPage,
  isNotFound,
  totalCalculators,
}) => {
  useEffect(() => {
    let cancelled = false;
    const baseUrl = SITE_URL.replace(/\/+$/, '');

    const applyHeadMetadata = (
      title: string,
      desc: string,
      canonical: string,
      robots: string,
      graphNodes: Record<string, any>[]
    ) => {
      if (cancelled) return;
      document.title = title;

      const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
        let el = document.querySelector(`meta[${attr}="${key}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attr, key);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      upsertMeta('name', 'description', desc);
      upsertMeta('name', 'robots', robots);
      upsertMeta('property', 'og:type', 'website');
      upsertMeta('property', 'og:site_name', SITE_NAME);
      upsertMeta('property', 'og:title', title);
      upsertMeta('property', 'og:description', desc);
      upsertMeta('property', 'og:url', canonical);
      upsertMeta('name', 'twitter:card', 'summary_large_image');
      upsertMeta('name', 'twitter:title', title);
      upsertMeta('name', 'twitter:description', desc);

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);

      document.getElementById('calculator-json-ld')?.remove();
      document.getElementById('faq-json-ld')?.remove();

      let schemaTag = document.getElementById('calcnaseeb-json-ld');
      if (graphNodes.length > 0) {
        const payload = {
          '@context': 'https://schema.org',
          '@graph': graphNodes,
        };
        if (!schemaTag) {
          schemaTag = document.createElement('script');
          schemaTag.id = 'calcnaseeb-json-ld';
          schemaTag.setAttribute('type', 'application/ld+json');
          document.head.appendChild(schemaTag);
        }
        schemaTag.textContent = JSON.stringify(payload);
      } else if (schemaTag) {
        schemaTag.remove();
      }
    };

    if (activeCalculator) {
      const cat = categories.find((c) => c.id === activeCalculator.categoryId);
      const catName = cat ? cat.name : 'General';
      const slug = getCalculatorSlug(activeCalculator);
      const canonical = `${baseUrl}${slug}`;

      import('../utils/seoBuilder').then(
        ({ buildCalculatorTitle, buildCalculatorMetaDescription, getCalculatorSeoContent }) => {
          if (cancelled) return;
          const seoContent = getCalculatorSeoContent(activeCalculator, catName);
          const title = buildCalculatorTitle(activeCalculator);
          const desc = buildCalculatorMetaDescription(activeCalculator);
          const graphNodes: Record<string, any>[] = [
            {
              '@type': 'WebApplication',
              '@id': `${canonical}#webapp`,
              name: activeCalculator.name,
              url: canonical,
              description: desc,
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'All',
              browserRequirements: 'Requires JavaScript',
              isPartOf: {
                '@type': 'WebSite',
                name: SITE_NAME,
                url: `${baseUrl}/`,
              },
              about: catName,
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${baseUrl}/`,
                },
                ...(cat
                  ? [
                      {
                        '@type': 'ListItem',
                        position: 2,
                        name: cat.name,
                        item: `${baseUrl}/category/${cat.id}`,
                      },
                      {
                        '@type': 'ListItem',
                        position: 3,
                        name: activeCalculator.name,
                        item: canonical,
                      },
                    ]
                  : [
                      {
                        '@type': 'ListItem',
                        position: 2,
                        name: activeCalculator.name,
                        item: canonical,
                      },
                    ]),
              ],
            },
          ];

          if (seoContent.faqs.length > 0) {
            graphNodes.push({
              '@type': 'FAQPage',
              '@id': `${canonical}#faq`,
              mainEntity: seoContent.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            });
          }

          applyHeadMetadata(title, desc, canonical, 'index, follow', graphNodes);
        }
      );

      return () => {
        cancelled = true;
      };
    }

    let title = `${SITE_NAME} — 400+ Free Online Calculators & Converters`;
    let desc = `Use ${totalCalculators}+ free online calculators for math, finance, health, construction, real estate, and unit conversions. Instant, accurate results with ${SITE_NAME}.`;
    let canonical = `${baseUrl}/`;
    let robots = 'index, follow';

    const graphNodes: Record<string, any>[] = [];

    if (selectedCategory) {
      const cat = categories.find((c) => c.id === selectedCategory);
      if (cat) {
        title = `Free ${cat.name} Calculators Online (${cat.calculators.length} Tools) – ${SITE_NAME}`;
        desc = `${cat.description} Browse ${cat.calculators.length} free online ${cat.name.toLowerCase()} calculators with formulas, examples, and instant results on ${SITE_NAME}.`;
        canonical = `${baseUrl}/category/${cat.id}`;

        graphNodes.push(
          {
            '@type': 'CollectionPage',
            '@id': `${canonical}#collection`,
            name: `${cat.name} Calculators`,
            description: desc,
            url: canonical,
            isPartOf: {
              '@type': 'WebSite',
              name: SITE_NAME,
              url: `${baseUrl}/`,
            },
          },
          {
            '@type': 'WebApplication',
            name: `${cat.name} Calculators Suite`,
            url: canonical,
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${baseUrl}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: cat.name,
                item: canonical,
              },
            ],
          }
        );
      }
    } else if (staticPage) {
      const pageMeta: Record<StaticPageId, { title: string; desc: string }> = {
        about: {
          title: `About Us | ${SITE_NAME}`,
          desc: `Learn about ${SITE_NAME}, our multi-category online calculator portal providing ${totalCalculators}+ fast, accurate tools across 14 categories.`,
        },
        contact: {
          title: `Contact Us | ${SITE_NAME}`,
          desc: `Get in touch with ${SITE_NAME} for calculator suggestions, feedback, bug reports, or general inquiries.`,
        },
        privacy: {
          title: `Privacy Policy | ${SITE_NAME}`,
          desc: `Read the ${SITE_NAME} Privacy Policy explaining client-side calculation privacy, localStorage, and Google AdSense & DART cookie disclosures.`,
        },
        terms: {
          title: `Terms & Conditions | ${SITE_NAME}`,
          desc: `Read the ${SITE_NAME} Terms & Conditions covering acceptable use, accuracy guidelines, and limitation of liability.`,
        },
        disclaimer: {
          title: `Disclaimer | ${SITE_NAME}`,
          desc: `Read the ${SITE_NAME} financial, health, mathematical, construction, and engineering disclaimer for all online calculators.`,
        },
      };

      title = pageMeta[staticPage].title;
      desc = pageMeta[staticPage].desc;
      canonical = `${baseUrl}/${staticPage}`;

      graphNodes.push({
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        name: title,
        description: desc,
        url: canonical,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: `${baseUrl}/`,
        },
      });
    } else if (isNotFound) {
      title = `Page Not Found | ${SITE_NAME}`;
      desc = `The requested calculator or page could not be found. Browse ${totalCalculators}+ free online calculators on ${SITE_NAME}.`;
      canonical = `${baseUrl}${currentPath}`;
      robots = 'noindex, follow';
    } else {
      // Homepage
      graphNodes.push(
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          url: `${baseUrl}/`,
          name: SITE_NAME,
          description: desc,
          inLanguage: 'en',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'WebApplication',
          '@id': `${baseUrl}/#webapp`,
          url: `${baseUrl}/`,
          name: SITE_NAME,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
          browserRequirements: 'Requires JavaScript',
          description: desc,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        }
      );
    }

    applyHeadMetadata(title, desc, canonical, robots, graphNodes);
    return () => {
      cancelled = true;
    };
  }, [currentPath, activeCalculator, selectedCategory, staticPage, isNotFound, totalCalculators]);

  return null;
};
