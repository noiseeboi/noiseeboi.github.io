# frozen_string_literal: true

Jekyll::Hooks.register :pages, :post_render do |page|
  profile_alt = page.data.dig("profile", "image_alt")
  if profile_alt
    profile_image = page.data.dig("profile", "image")
    page.output.sub!(%(alt="#{profile_image}"), %(alt="#{profile_alt}"))
  end

  page.output.gsub!(
    %r{<a class="abstract btn btn-sm z-depth-0" role="button">\s*Abs\s*</a>},
    '<a class="abstract btn btn-sm z-depth-0" role="button" aria-label="Show abstract">Abstract</a>',
  )
  page.output.gsub!(
    %r{<a class="bibtex btn btn-sm z-depth-0" role="button">\s*Bib\s*</a>},
    '<a class="bibtex btn btn-sm z-depth-0" role="button" aria-label="Show BibTeX citation">BibTeX</a>',
  )

  next unless page.data["cv_pdf"]

  page.output.sub!(
    /(<a\s+[^>]*href="[^"]*#{Regexp.escape(File.basename(page.data["cv_pdf"]))}"[^>]*)(>)/,
    '\1 aria-label="Download CV as PDF" title="Download CV as PDF"\2',
  )
  page.output.sub!(
    '<i class="fa-solid fa-file-pdf"></i>',
    '<i class="fa-solid fa-file-pdf" aria-hidden="true"></i>',
  )
end
