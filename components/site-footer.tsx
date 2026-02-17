import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Thèmes de l'examen", href: "/themes-examen" },
    { name: "Fiches pratiques", href: "/fiches" },
    { name: "Articles", href: "/articles" },
    { name: "Méthode", href: "/methode" },
    { name: "À propos", href: "/a-propos" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Glossaire", href: "/glossaire" },
    { name: "Sources", href: "/sources" },
    { name: "Méthodologie", href: "/methodologie" },
  ],
  themes: [
    { name: "Valeurs de la République", href: "/fiches?theme=valeurs" },
    { name: "Droits et devoirs", href: "/fiches?theme=droits" },
    { name: "Institutions", href: "/fiches?theme=institutions" },
    { name: "Histoire et symboles", href: "/fiches?theme=histoire" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Mission statement */}
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="QuizCitoyen"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
            />
            <span className="text-lg font-semibold text-foreground">
              QuizCitoyen
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Site pédagogique conçu pour accompagner les candidats à la naturalisation française. 
            Nous proposons des fiches claires, des conseils pratiques et une méthode simple 
            pour réussir l'examen civique et l'entretien de naturalisation.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Thématiques</h3>
            <ul className="space-y-3">
              {footerLinks.themes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <p className="mt-6 text-xs text-muted-foreground">
              Ce site n'est pas affilié au gouvernement français. Les informations 
              sont fournies à titre pédagogique et ne remplacent pas les sources officielles.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} QuizCitoyen. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
