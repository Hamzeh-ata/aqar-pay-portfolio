import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { TrustStrip } from '../../components/trust-strip/trust-strip';
import { ProblemSection } from '../../components/problem-section/problem-section';
import { PlatformExplorer } from '../../components/platform-explorer/platform-explorer';
import { PortfolioSection } from '../../components/portfolio-section/portfolio-section';
import { TenantSection } from '../../components/tenant-section/tenant-section';
import { BillingSection } from '../../components/billing-section/billing-section';
import { UtilitiesSection } from '../../components/utilities-section/utilities-section';
import { MaintenanceSection } from '../../components/maintenance-section/maintenance-section';
import { RolesSection } from '../../components/roles-section/roles-section';
import { WebMobileSection } from '../../components/web-mobile-section/web-mobile-section';
import { IntelligenceSection } from '../../components/intelligence-section/intelligence-section';
import { WhySection } from '../../components/why-section/why-section';
import { BilingualSection } from '../../components/bilingual-section/bilingual-section';
import { TrustSection } from '../../components/trust-section/trust-section';
import { FinalCta } from '../../components/final-cta/final-cta';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-landing',
  imports: [
    Navbar,
    Hero,
    TrustStrip,
    ProblemSection,
    PlatformExplorer,
    PortfolioSection,
    TenantSection,
    BillingSection,
    UtilitiesSection,
    MaintenanceSection,
    RolesSection,
    WebMobileSection,
    IntelligenceSection,
    WhySection,
    BilingualSection,
    TrustSection,
    FinalCta,
    SiteFooter,
  ],
  templateUrl: './landing.html',
})
export class Landing implements OnInit {
  private readonly translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.use('en');
  }
}
