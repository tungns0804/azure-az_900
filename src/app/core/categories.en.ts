/**
 * Bản tiếng Anh của phần nội dung học (tiêu đề phần thi, tiêu đề chủ đề, mô tả tổng quan).
 * Tách riêng khỏi categories.ts để file gốc tiếng Việt không bị phình to.
 *
 * English copy for the study screen (domain titles, topic titles, overviews).
 * Kept apart from categories.ts so the Vietnamese source stays readable.
 */

export interface EnDomain {
  title: string;
  intro: string;
}

export interface EnTopic {
  title: string;
  overview: string;
}

export const DOMAIN_EN: Record<string, EnDomain> = {
  d1: {
    title: 'Cloud concepts',
    intro:
      'The groundwork: what the cloud is, who is responsible for what, the three deployment models (public / private / hybrid) and the three service types (IaaS / PaaS / SaaS). No deep technical content — know the definitions and pick the right model for a scenario and the marks are yours.',
  },
  d2: {
    title: 'Azure architecture and services',
    intro:
      'The heaviest part of the exam. Four areas: the architectural skeleton (regions, availability zones, resource groups, subscriptions, management groups), compute and networking, storage, and finally identity, access and security.',
  },
  d3: {
    title: 'Azure management and governance',
    intro:
      'Money and control: managing cost, setting the rules for an organisation (governance and compliance), the tools for creating and managing resources, and the monitoring toolbox.',
  },
  d4: {
    title: 'Extended topics (outside the current study guide)',
    intro:
      'The source deck predates the latest AZ-900 refresh and carries a few topics Microsoft has since dropped from Skills measured — most obviously support plans and the preview/GA service lifecycle. There is also a set of questions that simply name Azure services (AI, IoT, big data, DevOps) by purpose, which the current outline no longer asks about. These are NOT on the official exam any more, but they are kept here because they round out the picture of Azure — work through the three real domains first.',
  },
};

export const TOPIC_EN: Record<string, EnTopic> = {
  /* ---------- d1 ---------- */
  'cc-define': {
    title: 'What cloud computing is',
    overview:
      'The cloud is renting compute resources (servers, storage, networking, software) over the internet instead of buying and running them yourself. Remember the traits that get asked about: elasticity, scalability, agility, high availability and disaster recovery.',
  },
  'cc-shared': {
    title: 'The shared responsibility model',
    overview:
      'Who owns what between you and Microsoft. Easy rule: data, endpoints, accounts and access are ALWAYS the customer’s responsibility across all three service types. Physical datacenters, physical hosts and the physical network are ALWAYS Microsoft’s. Everything in between (operating system, applications, network controls) changes hands depending on IaaS / PaaS / SaaS.',
  },
  'cc-models': {
    title: 'Public / private / hybrid cloud',
    overview:
      'Public cloud: a third-party provider’s shared infrastructure (Azure, AWS, GCP) with no upfront capital. Private cloud: infrastructure owned and run by one organisation — maximum control, but you fund it. Hybrid: both together, usually joining an on-premises datacenter to a public cloud. There is also multi-cloud, plus Azure Arc and Azure Stack for mixed setups.',
  },
  'cc-usecase': {
    title: 'Picking the right cloud model',
    overview:
      'The exam gives a scenario and asks which model fits. Follow the keywords: “no hardware investment” → public; “data must stay in-country or in the building” → private; “keep the legacy system on-premises but expand into the cloud”, “burst at peak” → hybrid.',
  },
  'cc-consumption': {
    title: 'The consumption-based model',
    overview:
      'Consumption-based (pay-as-you-go): you pay only for what you actually use, nothing upfront, and billing stops when usage stops. This is what turns CapEx into OpEx and is the biggest financial benefit of the cloud.',
  },
  'cc-pricing': {
    title: 'CapEx and OpEx',
    overview:
      'CapEx (capital expenditure): spend money upfront on fixed assets and depreciate it over years — buying servers, building a datacenter. OpEx (operational expenditure): pay for a service per period, deduct it in the same year, no upfront cost. Moving to the cloud is exactly the shift from CapEx to OpEx.',
  },
  'cb-ha-scale': {
    title: 'High availability and scalability',
    overview:
      'High availability: the system keeps running through failures, measured by an SLA (99.9% / 99.99%…). Scalability: adding capacity as load grows — scale up/down swaps to a bigger or smaller machine (vertical), scale out/in adds or removes machines (horizontal). Elasticity is doing that automatically as load changes.',
  },
  'cb-reliability': {
    title: 'Reliability and predictability',
    overview:
      'Reliability: recovering from failure, achieved by spreading a design across availability zones or regions. Predictability splits in two: predictable performance (autoscaling and load balancing keep it steady) and predictable cost (knowing the bill in advance via the Pricing calculator, TCO calculator and Cost Management).',
  },
  'cb-security': {
    title: 'Security and governance in the cloud',
    overview:
      'The cloud ships with a security and compliance scaffold: templates that deploy to standard, Azure Policy to enforce rules, alerts when configuration drifts, and a ready-made set of compliance certifications. IaaS gives you more control; with PaaS and SaaS the provider handles patching and maintenance.',
  },
  'cb-manage': {
    title: 'Manageability',
    overview:
      'Two branches: management OF the cloud (autoscaling, template-based deployment, self-healing) and management IN the cloud (portal, CLI, PowerShell, APIs, ARM templates). Questions often turn on telling the two apart.',
  },
  'cs-iaas': {
    title: 'IaaS — infrastructure as a service',
    overview:
      'Renting raw infrastructure: virtual machines, disks, virtual networks. You get full control and must also handle the operating system, patching and software. Tell-tale wording: “virtual machine”, “full control over the OS”, “lift-and-shift”. This is the service type where the customer does the most work.',
  },
  'cs-paas': {
    title: 'PaaS — platform as a service',
    overview:
      'The provider handles the infrastructure and the operating system; you handle only the application and its data. Examples: Azure App Service, Azure SQL Database, Azure Functions. You cannot reach the underlying OS — the usual way the exam separates it from IaaS.',
  },
  'cs-saas': {
    title: 'SaaS — software as a service',
    overview:
      'Finished software used straight from a browser: Microsoft 365, Dynamics 365, Outlook.com. The customer is responsible only for data, user accounts and configuration — no installation, no patching, no infrastructure.',
  },
  'cs-usecase': {
    title: 'Matching a service type to a scenario',
    overview:
      'Exam shortcut: “virtual machine”, “needs OS admin rights” → IaaS. “Just want to deploy code”, “don’t want to manage servers”, “managed database” → PaaS. “Use ready-made software”, “corporate email” → SaaS.',
  },

  /* ---------- d2 ---------- */
  'ar-regions': {
    title: 'Regions, region pairs, sovereign regions',
    overview:
      'A region is a group of datacenters within one geographic area joined by a low-latency network. A region pair is two regions in the same geography at least 300 miles apart, used for replication and for staggered updates — Azure updates only one region of a pair at a time. Sovereign regions are fully isolated instances: Azure Government (US) and Azure China 21Vianet.',
  },
  'ar-az': {
    title: 'Availability zones',
    overview:
      'Datacenters with independent power, cooling and networking, WITHIN A SINGLE REGION. Every AZ-enabled region has at least three. They protect against a datacenter failure — NOT for replicating across regions (a favourite trap). For region-level protection use region pairs or GRS.',
  },
  'ar-dc': {
    title: 'Datacenters',
    overview:
      'The smallest physical unit: a building of servers with its own power and network. Several datacenters form an availability zone, several zones form a region, several regions form a geography.',
  },
  'ar-resources': {
    title: 'Resources and resource groups',
    overview:
      'A resource is anything you create in Azure (virtual machine, storage account, database…). A resource group is a logical container grouping them. Rules that get asked: a resource belongs to EXACTLY ONE resource group; resource groups CANNOT nest; deleting a resource group deletes everything inside; the group itself costs nothing.',
  },
  'ar-subscription': {
    title: 'Subscriptions',
    overview:
      'The billing unit and a management boundary. A subscription is tied to one Microsoft Entra tenant; a tenant can hold many subscriptions. Organisations split subscriptions to separate invoices per department or to get around per-subscription quotas.',
  },
  'ar-mgmtgroup': {
    title: 'Management groups',
    overview:
      'The layer above subscriptions, used to apply policy and RBAC once across many subscriptions. Management groups can nest (up to six levels, excluding root). Classic question: the same rule must apply to MANY subscriptions → management group.',
  },
  'ar-hierarchy': {
    title: 'The resource hierarchy',
    overview:
      'Top to bottom: management group → subscription → resource group → resource. Settings applied higher up are inherited downward. Knowing this order answers a surprising number of questions.',
  },
  'cn-compute': {
    title: 'Comparing compute types',
    overview:
      'Virtual machine: full control, IaaS, you manage the OS. Containers (Azure Container Instances / Azure Kubernetes Service): lighter than a VM, sharing the host kernel, fast to start. Azure Functions: serverless, event-driven, billed only while the code actually runs.',
  },
  'cn-vm': {
    title: 'Virtual machine options',
    overview:
      'Virtual Machine Scale Sets: a group of identical VMs that grows and shrinks with load. Availability sets: spread VMs across fault domains and update domains so they do not all fail together inside one datacenter. Azure Virtual Desktop: virtualised desktops, including multi-session Windows.',
  },
  'cn-vmres': {
    title: 'Resources a virtual machine needs',
    overview:
      'Creating a VM creates a whole set with it: a size (CPU/RAM), disks (OS disk plus data disks), a network interface, a virtual network and subnet, an IP address and a network security group. These are separate resources and some still cost money while the VM is stopped (disks, static IPs).',
  },
  'cn-hosting': {
    title: 'Application hosting options',
    overview:
      'Azure App Service (web apps, API apps, mobile backends) is the default PaaS choice for the web. Containers suit workloads that must ship with their environment. VMs are for full control or legacy software. The App Service plan sets price and features: Free / Shared (no dedicated compute), Basic (dedicated compute, custom domains, SSL), Standard (adds autoscale, staging slots, load balancing), Premium (more power and more slots).',
  },
  'cn-vnet': {
    title: 'Virtual networking, peering, DNS, VPN Gateway, ExpressRoute',
    overview:
      'A virtual network (VNet) is your private network in Azure, divided into subnets. Peering joins two VNets over the Microsoft backbone. VPN Gateway connects on-premises to Azure over the internet (encrypted). ExpressRoute is a private circuit that does NOT traverse the public internet — pick it when the question mentions high reliability, large bandwidth, or avoiding the internet. Network security groups (NSGs) filter traffic by port and address.',
  },
  'cn-endpoint': {
    title: 'Public and private endpoints',
    overview:
      'A public endpoint has a public IP address reachable from the internet. A private endpoint gives a service a private IP INSIDE your VNet, so traffic stays entirely on the Microsoft network and is never exposed to the internet.',
  },
  'st-services': {
    title: 'Comparing Azure Storage services',
    overview:
      'Four services in one storage account: Blob (unstructured data, large files, backups — also where VM virtual disks live), File (SMB/NFS shares that mount like a network drive), Queue (message queues that decouple application parts) and Table (key/attribute NoSQL). Azure Disk covers disks attached to VMs.',
  },
  'st-tiers': {
    title: 'Storage access tiers',
    overview:
      'Hot: frequent access, highest storage price but lowest access price. Cool: infrequent, 30-day minimum. Cold: rarer still, 90-day minimum. Archive: long-term, cheapest, 180-day minimum and must be rehydrated (hours) before it can be read. The rule: the less you read it, the cheaper to store and the dearer and slower to retrieve.',
  },
  'st-redundancy': {
    title: 'Redundancy options',
    overview:
      'LRS: three copies in one datacenter — cheapest, survives a disk or rack failure. ZRS: three copies across three availability zones in one region. GRS: LRS in the primary region plus replication to the paired region (the secondary is readable only after Microsoft fails over). RA-GRS: as GRS but the secondary is readable at any time. GZRS and RA-GZRS: ZRS in the primary plus replication to the pair. Azure Storage always keeps at least three copies.',
  },
  'st-account': {
    title: 'Storage accounts and storage types',
    overview:
      'A storage account is both a container and a globally unique namespace — the name cannot clash with anyone else’s, uses lowercase letters and digits only, and is 3–24 characters. Main kinds: Standard general-purpose v2 (the default, supports all four services), Premium block blob, Premium file share and Premium page blob.',
  },
  'st-move': {
    title: 'Tools for moving files',
    overview:
      'AzCopy: a command-line tool that copies data up, down or between storage accounts, syncing one way. Azure Storage Explorer: a graphical app that uses AzCopy underneath. Azure File Sync: keeps an on-premises file server in step with Azure Files, turning the local server into a cache.',
  },
  'st-migrate': {
    title: 'Azure Migrate and Azure Data Box',
    overview:
      'Azure Migrate: a toolkit for discovering and moving servers, databases and web apps to Azure, starting with an assessment. Azure Data Box: a physical appliance Microsoft ships to you so very large datasets (tens to hundreds of TB) can be copied and shipped back — for when the network is too slow to upload.',
  },
  'id-directory': {
    title: 'Microsoft Entra ID and Domain Services',
    overview:
      'Microsoft Entra ID (formerly Azure Active Directory) is the cloud identity service — users, groups and sign-in for Azure and Microsoft 365. It is NOT the same as on-premises Active Directory Domain Services: no group policy, no traditional LDAP/Kerberos. Microsoft Entra Domain Services offers a managed domain (domain join, group policy, LDAP) without running domain controllers. Azure AD Connect synchronises on-premises identities to the cloud.',
  },
  'id-auth': {
    title: 'SSO, MFA and passwordless',
    overview:
      'SSO: sign in once, reach many applications. MFA: at least two of the three factors — something you KNOW (password), something you HAVE (phone, token), something you ARE (fingerprint, face). Passwordless drops the password entirely: Windows Hello, Microsoft Authenticator, FIDO2 security keys.',
  },
  'id-external': {
    title: 'External identities (B2B / B2C)',
    overview:
      'B2B: invite partners and contractors to use their existing accounts to reach your resources (guest users). B2C: an identity solution for the customers of your application, letting them sign in with social or personal email accounts.',
  },
  'id-conditional': {
    title: 'Conditional Access',
    overview:
      'An if–then statement for sign-in: gather signals (who is signing in, from which device, from where, which application, what risk level) and then allow, block, or demand extra proof such as MFA. It has two halves: Assignments (the conditions) and Access controls (the action).',
  },
  'id-rbac': {
    title: 'Azure RBAC',
    overview:
      'Role-based access control: assign a role (Owner, Contributor, Reader, User Access Administrator…) to a user or group at a scope (management group, subscription, resource group, resource). Permissions are INHERITED downward. Keep the split clear: Entra ID handles AUTHENTICATION (who you are), RBAC handles AUTHORIZATION (what you may do).',
  },
  'id-zerotrust': {
    title: 'Zero Trust',
    overview:
      'The “never trust, always verify” principle. Three pillars: verify explicitly (authenticate and authorise from every available signal), use least privilege access (minimum rights, time-bound), assume breach (segment the blast radius, encrypt, monitor).',
  },
  'id-defense': {
    title: 'Defense in depth',
    overview:
      'Layered defence, each layer slowing an attacker. Outside in: physical security → identity and access → perimeter (DDoS Protection, firewall) → network (segmentation, NSGs) → compute (patching, closed ports) → application → data. The innermost layer, and the attacker’s real target, is DATA.',
  },
  'id-defender': {
    title: 'Microsoft Defender for Cloud',
    overview:
      'Formerly Azure Security Center. Watches the security posture of Azure, on-premises and other-cloud resources; scores it with Secure Score, recommends fixes, raises threat alerts and maps everything to compliance standards. Microsoft Sentinel (formerly Azure Sentinel) is the SIEM/SOAR that collects and automatically analyses security events.',
  },

  /* ---------- d3 ---------- */
  'cm-factors': {
    title: 'Factors that affect cost',
    overview:
      'Resource type and configuration, how much you use, the region (prices differ), outbound internet traffic (data INTO Azure is free, data OUT is billed), subscription and agreement type, and inter-region bandwidth. Ways to save: reserved instances (1–3 year commitment), Azure Hybrid Benefit (reuse existing Windows/SQL licences), spot VMs, and shutting down idle machines.',
  },
  'cm-calculators': {
    title: 'Pricing calculator vs TCO calculator',
    overview:
      'Pricing calculator: ESTIMATES the cost of an Azure configuration you intend to build — pick services, region and sizing and get a number. TCO calculator: COMPARES what you spend on-premises today against running the same thing on Azure, to build the business case. The exam likes to test the difference.',
  },
  'cm-tools': {
    title: 'Microsoft Cost Management',
    overview:
      'The tool for tracking money ACTUALLY spent: cost analysis, budgets with alerts before you overrun, exported reports and savings recommendations. Unlike the two calculators it looks at the past and present rather than estimating the future.',
  },
  'cm-tags': {
    title: 'Tags',
    overview:
      'Name/value pairs attached to resources for classification — for example Department=Finance, Environment=Production. Used to filter cost reports and to group resources along a different axis from resource groups. Note: tags are NOT automatically inherited from a resource group to its resources; use Azure Policy to require them.',
  },
  'gc-purview': {
    title: 'Microsoft Purview',
    overview:
      'A suite for data governance and compliance: map all of an organisation’s data (data map), make it searchable through a catalog, classify sensitive data and trace data lineage across Azure, on-premises and other clouds.',
  },
  'gc-policy': {
    title: 'Azure Policy and Blueprints',
    overview:
      'Set and enforce rules for resources: which regions are allowed, which VM sizes, which tags are mandatory. A policy can deny an action, audit a violation or remediate it (deployIfNotExists), and reports compliance. Against RBAC: RBAC governs WHO MAY DO WHAT, Policy governs WHAT MAY EXIST. An initiative is a group of policies. Azure Blueprints packages policies, RBAC and ARM templates into a repeatable deployment.',
  },
  'gc-locks': {
    title: 'Resource locks',
    overview:
      'Guards against accidental changes, applied at subscription, resource group or resource scope and inherited downward. Two kinds: Delete (CannotDelete — editable, not deletable) and Read-only (no edits, no deletes). A lock stops even an Owner — remove it first. Note: locks do not restrict by user; that is RBAC’s job.',
  },
  'gc-trust': {
    title: 'Service Trust Portal and Trust Center',
    overview:
      'A public portal holding audit reports, compliance certifications (ISO, SOC, GDPR…) and Microsoft’s security and privacy documentation. Compliance Manager lives there and scores and tracks your own organisation’s compliance. The Trust Center is the overview site for Microsoft’s security, privacy and compliance commitments.',
  },
  'mg-portal': {
    title: 'The Azure portal',
    overview:
      'The graphical web interface for creating and managing everything in Azure, with customisable dashboards. There is also an Azure mobile app. The portal suits one-off work and visual inspection; anything repeated is better done with the CLI, PowerShell or ARM templates.',
  },
  'mg-shell': {
    title: 'Cloud Shell, Azure CLI, Azure PowerShell',
    overview:
      'Azure Cloud Shell is a terminal inside the browser with nothing to install, offering Bash or PowerShell and carrying both the Azure CLI and Azure PowerShell — so it runs from any operating system, Chrome OS and phones included. The Azure CLI uses az… syntax on Windows, Linux and macOS. Azure PowerShell is a cmdlet module and needs PowerShell. Exam shortcut: must run a PowerShell script from a non-Windows machine → use Cloud Shell, or install PowerShell Core plus the Azure PowerShell module.',
  },
  'mg-arc': {
    title: 'Azure Arc',
    overview:
      'Brings on-premises servers, servers in other clouds, Kubernetes clusters and some databases under Azure’s own tooling — apply Azure Policy, tag them and cover them with Defender for Cloud as though they were Azure resources.',
  },
  'mg-arm': {
    title: 'Azure Resource Manager and ARM templates',
    overview:
      'ARM is the management layer every request passes through — the portal, CLI, PowerShell and SDKs all call the same API. An ARM template is a JSON file describing infrastructure as code: declare the desired result, deploy it repeatedly, idempotent (same result every run). Bicep is a terser language that compiles to ARM templates. Classic question: create many identical resources automatically and repeatably → ARM template.',
  },
  'mo-advisor': {
    title: 'Azure Advisor',
    overview:
      'Gives personalised recommendations for your resources across five categories: reliability, security, performance, cost and operational excellence. Note that Advisor works from resources ALREADY RUNNING — it does not price a system you have not built yet; that is the Pricing calculator’s job.',
  },
  'mo-servicehealth': {
    title: 'Azure Service Health',
    overview:
      'Three levels: Azure status (global health of every service), Service health (incidents affecting EXACTLY the services and regions you use, plus planned maintenance) and Resource health (the state of one specific resource of yours). The exam likes to test the difference.',
  },
  'ex-support': {
    title: 'Azure support plans',
    overview:
      'Four plans: Basic (free with every account, documentation and community only — technical support tickets NOT included), Developer (business hours, for trial and test environments), Standard (24/7, for production), Professional Direct (24/7 plus architecture guidance and a ProDirect delivery manager). Developer and above can open support requests. The older exam liked to ask: cheapest plan that still includes an architecture review → Professional Direct; cheapest plan with 24/7 support → Standard.',
  },
  'ex-lifecycle': {
    title: 'Service lifecycle: preview and GA',
    overview:
      'Private preview: invited customers only. Public preview: open to everyone but with NO SLA, NOT recommended for production, and limited support. General availability (GA): fully released with a complete SLA. The Modern Lifecycle Policy commits Microsoft to at least 12 months’ notice before ending support for a service that has no successor.',
  },
  'ex-caf': {
    title: 'Cloud Adoption Framework',
    overview:
      'Staged guidance for moving an organisation to the cloud: Strategy → Plan → Ready → Adopt (Migrate / Innovate) → Govern → Manage. The FIRST stage is Strategy — establishing the motivations and the business outcomes you want.',
  },
  'ex-devops': {
    title: 'Azure DevOps and developer tooling',
    overview:
      'Azure DevOps covers Azure Repos (Git repositories), Azure Pipelines (CI/CD), Azure Boards (work tracking), Azure Test Plans and Azure Artifacts. GitHub Actions also provides CI/CD. The older exam asked about deploying or updating applications to Azure through a CI/CD pipeline.',
  },
  'ex-services': {
    title: 'Other Azure services',
    overview:
      'Questions that name a service by what it does. AI and machine learning: Azure Machine Learning (build, train and deploy predictive models), Azure AI services, Azure Bot Service. IoT: IoT Hub (two-way communication, MONITOR AND CONTROL devices), IoT Central (ready-made SaaS), Azure Sphere (device security). Big data: HDInsight (Hadoop/Spark), Azure Databricks (Apache Spark), Azure Synapse Analytics (data warehouse), Azure Data Factory (ETL), Stream Analytics (real-time streams). Databases: Azure Cosmos DB (multi-model NoSQL — key-value, document, column-family, graph) and Azure SQL Database.',
  },
  'mo-monitor': {
    title: 'Azure Monitor, Log Analytics, alerts, Application Insights',
    overview:
      'Azure Monitor is the platform that collects metrics and logs from every resource. Log Analytics stores and queries logs with KQL. Alerts fire actions (email, webhook, runbook) when a threshold is crossed. Application Insights watches performance and errors inside an application — response times, failure rates, user behaviour.',
  },
};
