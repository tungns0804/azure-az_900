/**
 * Danh mục kiến thức AZ-900, bám theo "Skills measured" chính thức của Microsoft
 * (https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900).
 * Mỗi chủ đề kèm mô tả tổng quan và link tài liệu Microsoft để đọc chi tiết.
 */

import { DOMAIN_EN, TOPIC_EN } from './categories.en';

export type DomainId = 'd1' | 'd2' | 'd3' | 'd4';

export interface StudyLink {
  label: string;
  url: string;
}

export interface StudyTopic {
  id: string;
  /** tên chủ đề (tiếng Việt) */
  title: string;
  /** tên chủ đề (tiếng Anh) — gán tự động từ categories.en.ts */
  titleEn?: string;
  /** mô tả tổng quan (tiếng Anh) — gán tự động từ categories.en.ts */
  overviewEn?: string;
  /** mục tiêu tương ứng trong đề cương chính thức (nguyên văn tiếng Anh) */
  objective: string;
  /** mô tả tổng quan */
  overview: string;
  links: StudyLink[];
}

export interface StudyGroup {
  /** tiêu đề nhóm, nguyên văn theo đề cương */
  title: string;
  topics: StudyTopic[];
}

export interface StudyDomain {
  id: DomainId;
  title: string;
  /** tên phần thi (tiếng Anh) — gán tự động từ categories.en.ts */
  titleEn?: string;
  /** dẫn nhập (tiếng Anh) — gán tự động từ categories.en.ts */
  introEn?: string;
  objective: string;
  /** tỉ trọng trong đề thi */
  weight: string;
  intro: string;
  groups: StudyGroup[];
}

const L = 'https://learn.microsoft.com/en-us';

export const STUDY_GUIDE_URL = `${L}/credentials/certifications/resources/study-guides/az-900`;
export const CERT_URL = `${L}/credentials/certifications/azure-fundamentals/`;
export const EXAM_URL = `${L}/credentials/certifications/exams/az-900/`;

export const DOMAINS: StudyDomain[] = [
  {
    id: 'd1',
    title: 'Khái niệm điện toán đám mây',
    objective: 'Describe cloud concepts',
    weight: '25–30%',
    intro:
      'Phần lý thuyết nền: đám mây là gì, ai chịu trách nhiệm phần nào, ba mô hình triển khai (public / private / hybrid) và ba loại dịch vụ (IaaS / PaaS / SaaS). Không có kỹ thuật sâu — nắm chắc định nghĩa và biết chọn đúng mô hình cho từng tình huống là ăn điểm chắc.',
    groups: [
      {
        title: 'Describe cloud computing',
        topics: [
          {
            id: 'cc-define',
            title: 'Điện toán đám mây là gì',
            objective: 'Define cloud computing',
            overview:
              'Đám mây là việc thuê tài nguyên máy tính (máy chủ, lưu trữ, mạng, phần mềm) qua Internet thay vì tự mua và tự vận hành. Nhớ các đặc tính hay bị hỏi: elasticity (co giãn theo nhu cầu), scalability (mở rộng), agility (triển khai nhanh), high availability và disaster recovery.',
            links: [
              { label: 'Học phần: Describe cloud computing', url: `${L}/training/modules/describe-cloud-compute/` },
              { label: 'Cloud Adoption Framework', url: `${L}/azure/cloud-adoption-framework/overview` },
            ],
          },
          {
            id: 'cc-shared',
            title: 'Mô hình trách nhiệm chung (shared responsibility)',
            objective: 'Describe the shared responsibility model',
            overview:
              'Ai lo phần nào giữa bạn và Microsoft. Quy tắc dễ nhớ: dữ liệu, thiết bị đầu cuối, tài khoản và quyền truy cập LUÔN là trách nhiệm của khách hàng ở cả ba loại dịch vụ. Datacenter vật lý, máy chủ vật lý và mạng vật lý LUÔN thuộc Microsoft. Phần ở giữa (hệ điều hành, ứng dụng, network control) đổi chủ tuỳ IaaS / PaaS / SaaS.',
            links: [
              { label: 'Shared responsibility in the cloud', url: `${L}/azure/security/fundamentals/shared-responsibility` },
            ],
          },
          {
            id: 'cc-models',
            title: 'Public / Private / Hybrid cloud',
            objective: 'Define cloud models, including public, private, and hybrid',
            overview:
              'Public cloud: hạ tầng của nhà cung cấp bên thứ ba (Azure, AWS, GCP), dùng chung, không tốn vốn đầu tư ban đầu. Private cloud: hạ tầng riêng của một tổ chức, tự vận hành, kiểm soát tối đa nhưng phải bỏ vốn. Hybrid: kết hợp cả hai, thường nối datacenter tại chỗ với public cloud. Ngoài ra còn multi-cloud (dùng nhiều nhà cung cấp) và Azure Arc / Azure Stack cho tình huống lai.',
            links: [
              { label: 'Học phần: Describe cloud service types', url: `${L}/training/modules/describe-cloud-service-types/` },
              { label: 'Azure Arc — tổng quan', url: `${L}/azure/azure-arc/overview` },
            ],
          },
          {
            id: 'cc-usecase',
            title: 'Chọn mô hình đám mây phù hợp',
            objective: 'Identify appropriate use cases for each cloud model',
            overview:
              'Đề thi hay cho một tình huống rồi hỏi nên dùng mô hình nào. Bám vào từ khoá: “không muốn đầu tư phần cứng” → public; “dữ liệu bắt buộc nằm trong nước hoặc trong toà nhà” → private; “vừa giữ hệ thống cũ tại chỗ vừa mở rộng lên cloud”, “bùng tải lúc cao điểm” → hybrid.',
            links: [
              { label: 'Học phần: Describe cloud computing', url: `${L}/training/modules/describe-cloud-compute/` },
            ],
          },
          {
            id: 'cc-consumption',
            title: 'Mô hình tính tiền theo mức dùng',
            objective: 'Describe the consumption-based model',
            overview:
              'Consumption-based (pay-as-you-go): chỉ trả cho phần thực sự dùng, không trả trước, ngừng dùng thì ngừng tính tiền. Đây chính là thứ biến CapEx thành OpEx và là lợi ích tài chính lớn nhất của cloud.',
            links: [
              { label: 'Học phần: Describe cloud computing', url: `${L}/training/modules/describe-cloud-compute/` },
            ],
          },
          {
            id: 'cc-pricing',
            title: 'CapEx và OpEx',
            objective: 'Compare cloud pricing models',
            overview:
              'CapEx (capital expenditure): bỏ tiền mua tài sản cố định trước, khấu hao dần qua nhiều năm — mua máy chủ, xây datacenter. OpEx (operational expenditure): trả tiền dịch vụ theo kỳ, khấu trừ ngay trong năm, không có chi phí trả trước. Chuyển lên cloud chính là chuyển từ CapEx sang OpEx.',
            links: [
              { label: 'Fiscal outcomes — CapEx và OpEx', url: `${L}/azure/cloud-adoption-framework/strategy/business-outcomes/fiscal-outcomes` },
            ],
          },
        ],
      },
      {
        title: 'Describe the benefits of using cloud services',
        topics: [
          {
            id: 'cb-ha-scale',
            title: 'Tính sẵn sàng cao & khả năng mở rộng',
            objective: 'Describe the benefits of high availability and scalability in the cloud',
            overview:
              'High availability: hệ thống vẫn chạy khi có sự cố, đo bằng SLA (99,9% / 99,99%…). Scalability: tăng năng lực khi tải tăng — scale up/down là đổi sang máy mạnh hơn hoặc yếu hơn (theo chiều dọc), scale out/in là thêm hoặc bớt số máy (theo chiều ngang). Elasticity là tự động co giãn theo tải.',
            links: [
              { label: 'Reliability — Azure Well-Architected', url: `${L}/azure/well-architected/reliability/principles` },
              { label: 'SLA của các dịch vụ Azure', url: 'https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services' },
            ],
          },
          {
            id: 'cb-reliability',
            title: 'Độ tin cậy & khả năng dự đoán',
            objective: 'Describe the benefits of reliability and predictability in the cloud',
            overview:
              'Reliability: khả năng phục hồi sau sự cố, có được nhờ thiết kế phân tán qua nhiều availability zone hoặc region. Predictability chia hai nhánh: predictable performance (tự động scale, cân bằng tải giữ hiệu năng ổn định) và predictable cost (biết trước chi phí nhờ Pricing calculator, TCO calculator, Cost Management).',
            links: [
              { label: 'Azure Well-Architected Framework', url: `${L}/azure/well-architected/` },
            ],
          },
          {
            id: 'cb-security',
            title: 'Bảo mật & quản trị trên đám mây',
            objective: 'Describe the benefits of security and governance in the cloud',
            overview:
              'Cloud cho sẵn bộ khung bảo mật và tuân thủ: template để triển khai đúng chuẩn, Azure Policy để bắt buộc quy tắc, cảnh báo khi cấu hình lệch chuẩn, và bộ chứng nhận tuân thủ có sẵn. Với IaaS bạn kiểm soát nhiều hơn; với PaaS và SaaS nhà cung cấp lo phần vá lỗi và bảo trì.',
            links: [
              { label: 'Azure security — tổng quan', url: `${L}/azure/security/fundamentals/overview` },
            ],
          },
          {
            id: 'cb-manage',
            title: 'Khả năng quản lý (manageability)',
            objective: 'Describe the benefits of manageability in the cloud',
            overview:
              'Hai nhánh: quản lý TRONG cloud (tự động scale, tự động triển khai theo template, tự phục hồi khi hỏng) và quản lý cloud (portal, CLI, PowerShell, API, ARM template). Câu hỏi hay đánh vào việc tách đúng hai nhánh này.',
            links: [
              { label: 'Học phần: Benefits of using cloud services', url: `${L}/training/modules/describe-benefits-use-cloud-services/` },
            ],
          },
        ],
      },
      {
        title: 'Describe cloud service types',
        topics: [
          {
            id: 'cs-iaas',
            title: 'IaaS — Infrastructure as a Service',
            objective: 'Describe infrastructure as a service (IaaS)',
            overview:
              'Thuê hạ tầng thô: máy ảo, ổ đĩa, mạng ảo. Bạn toàn quyền và cũng phải tự lo hệ điều hành, vá lỗi, phần mềm. Từ khoá nhận biết: “virtual machine”, “toàn quyền trên hệ điều hành”, “lift-and-shift”. Đây là loại dịch vụ khách hàng phải làm nhiều việc nhất.',
            links: [
              { label: 'Azure Virtual Machines', url: `${L}/azure/virtual-machines/overview` },
              { label: 'Học phần: Describe cloud service types', url: `${L}/training/modules/describe-cloud-service-types/` },
            ],
          },
          {
            id: 'cs-paas',
            title: 'PaaS — Platform as a Service',
            objective: 'Describe platform as a service (PaaS)',
            overview:
              'Nhà cung cấp lo hạ tầng và hệ điều hành, bạn chỉ lo ứng dụng và dữ liệu. Ví dụ: Azure App Service, Azure SQL Database, Azure Functions. Không truy cập được vào hệ điều hành bên dưới — đây là điểm hay bị hỏi để phân biệt với IaaS.',
            links: [
              { label: 'Azure App Service — tổng quan', url: `${L}/azure/app-service/overview` },
            ],
          },
          {
            id: 'cs-saas',
            title: 'SaaS — Software as a Service',
            objective: 'Describe software as a service (SaaS)',
            overview:
              'Dùng luôn phần mềm hoàn chỉnh qua trình duyệt: Microsoft 365, Dynamics 365, Outlook.com. Khách hàng chỉ chịu trách nhiệm dữ liệu, tài khoản người dùng và cấu hình phần mềm — không cài đặt, không vá lỗi, không quản lý hạ tầng.',
            links: [
              { label: 'Học phần: Describe cloud service types', url: `${L}/training/modules/describe-cloud-service-types/` },
            ],
          },
          {
            id: 'cs-usecase',
            title: 'Chọn đúng loại dịch vụ cho tình huống',
            objective: 'Identify appropriate use cases for each cloud service type',
            overview:
              'Mẹo làm bài: thấy “virtual machine”, “cần quyền quản trị hệ điều hành” → IaaS. Thấy “chỉ muốn triển khai code”, “không muốn quản lý máy chủ”, “database dạng dịch vụ” → PaaS. Thấy “dùng ngay phần mềm có sẵn”, “email doanh nghiệp” → SaaS.',
            links: [
              { label: 'Học phần: Describe cloud service types', url: `${L}/training/modules/describe-cloud-service-types/` },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd2',
    title: 'Kiến trúc và dịch vụ Azure',
    objective: 'Describe Azure architecture and services',
    weight: '35–40%',
    intro:
      'Phần nặng nhất của đề thi. Gồm bốn mảng: bộ khung kiến trúc (region, availability zone, resource group, subscription, management group), compute và networking, storage, và cuối cùng là identity — access — security.',
    groups: [
      {
        title: 'Describe the core architectural components of Azure',
        topics: [
          {
            id: 'ar-regions',
            title: 'Region, region pair, sovereign region',
            objective: 'Describe Azure regions, region pairs, and sovereign regions',
            overview:
              'Region là một cụm datacenter trong cùng khu vực địa lý, nối với nhau bằng mạng độ trễ thấp. Region pair là hai region trong cùng geography, cách nhau ít nhất 300 dặm, dùng để nhân bản dữ liệu và luân phiên khi cập nhật — Azure chỉ cập nhật một region trong cặp tại một thời điểm. Sovereign region là vùng tách biệt hoàn toàn: Azure Government (Mỹ) và Azure China 21Vianet.',
            links: [
              { label: 'Region và availability zone', url: `${L}/azure/reliability/availability-zones-overview` },
              { label: 'Azure geographies', url: 'https://azure.microsoft.com/explore/global-infrastructure/geographies/' },
            ],
          },
          {
            id: 'ar-az',
            title: 'Availability zone',
            objective: 'Describe availability zones',
            overview:
              'Các datacenter tách biệt về nguồn điện, làm mát và mạng, NẰM TRONG CÙNG MỘT REGION. Mỗi region hỗ trợ AZ có tối thiểu ba zone. Chúng chống hỏng ở mức datacenter — KHÔNG phải để nhân bản qua nhiều region (bẫy quen thuộc của đề thi). Muốn chống hỏng cả region thì dùng region pair hoặc GRS.',
            links: [
              { label: 'Availability zones', url: `${L}/azure/reliability/availability-zones-overview` },
            ],
          },
          {
            id: 'ar-dc',
            title: 'Datacenter',
            objective: 'Describe Azure datacenters',
            overview:
              'Đơn vị vật lý nhỏ nhất: một toà nhà chứa máy chủ, có nguồn điện và mạng riêng. Nhiều datacenter tạo thành một availability zone, nhiều zone tạo thành một region, nhiều region tạo thành một geography.',
            links: [
              { label: 'Hạ tầng toàn cầu của Azure', url: 'https://azure.microsoft.com/explore/global-infrastructure/' },
            ],
          },
          {
            id: 'ar-resources',
            title: 'Resource và resource group',
            objective: 'Describe Azure resources and resource groups',
            overview:
              'Resource là mọi thứ bạn tạo ra trong Azure (máy ảo, storage account, database…). Resource group là hộp chứa logic gom các resource lại. Quy tắc hay bị hỏi: một resource chỉ thuộc ĐÚNG MỘT resource group; resource group KHÔNG lồng nhau được; xoá resource group là xoá sạch mọi thứ bên trong; bản thân resource group không tốn tiền.',
            links: [
              { label: 'Quản lý resource group', url: `${L}/azure/azure-resource-manager/management/manage-resource-groups-portal` },
            ],
          },
          {
            id: 'ar-subscription',
            title: 'Subscription',
            objective: 'Describe subscriptions',
            overview:
              'Đơn vị thanh toán và cũng là ranh giới quản lý. Một subscription gắn với một Microsoft Entra tenant; một tenant chứa được nhiều subscription. Doanh nghiệp hay tách subscription để phân tách hoá đơn theo phòng ban hoặc để né giới hạn (quota) của từng subscription.',
            links: [
              { label: 'Subscription và governance', url: `${L}/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions` },
            ],
          },
          {
            id: 'ar-mgmtgroup',
            title: 'Management group',
            objective: 'Describe management groups',
            overview:
              'Tầng nằm trên subscription, dùng để áp policy và quyền RBAC một lần cho nhiều subscription. Management group lồng nhau được (tối đa 6 tầng, chưa tính root). Câu hỏi hay gặp: cần áp cùng một quy tắc cho NHIỀU subscription → dùng management group.',
            links: [
              { label: 'Management group là gì', url: `${L}/azure/governance/management-groups/overview` },
            ],
          },
          {
            id: 'ar-hierarchy',
            title: 'Hệ thống phân cấp tài nguyên',
            objective:
              'Describe the hierarchy of resource groups, subscriptions, and management groups',
            overview:
              'Thứ tự từ trên xuống: Management group → Subscription → Resource group → Resource. Thiết lập ở tầng trên được kế thừa xuống tầng dưới. Nhớ đúng thứ tự này là trả lời được rất nhiều câu.',
            links: [
              { label: 'Sơ đồ phân cấp tài nguyên', url: `${L}/azure/azure-resource-manager/management/overview` },
            ],
          },
        ],
      },
      {
        title: 'Describe Azure compute and networking services',
        topics: [
          {
            id: 'cn-compute',
            title: 'So sánh các loại compute',
            objective:
              'Compare compute types, including container instances, virtual machines, and functions',
            overview:
              'Virtual machine: toàn quyền, thuộc IaaS, phải tự quản lý hệ điều hành. Container (Azure Container Instances / Azure Kubernetes Service): nhẹ hơn máy ảo, dùng chung nhân hệ điều hành, khởi động nhanh. Azure Functions: serverless, chạy theo sự kiện, chỉ trả tiền lúc code thực sự chạy.',
            links: [
              { label: 'Chọn dịch vụ compute', url: `${L}/azure/architecture/guide/technology-choices/compute-decision-tree` },
              { label: 'Azure Functions — tổng quan', url: `${L}/azure/azure-functions/functions-overview` },
            ],
          },
          {
            id: 'cn-vm',
            title: 'Tuỳ chọn máy ảo',
            objective:
              'Describe virtual machine options, including Azure Virtual Machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop',
            overview:
              'Virtual Machine Scale Sets: nhóm máy ảo giống hệt nhau, tự tăng giảm số lượng theo tải. Availability set: chia máy ảo qua nhiều fault domain và update domain để chúng không cùng chết một lúc trong một datacenter. Azure Virtual Desktop: máy tính để bàn ảo hoá, dùng được cả Windows nhiều phiên.',
            links: [
              { label: 'Virtual Machine Scale Sets', url: `${L}/azure/virtual-machine-scale-sets/overview` },
              { label: 'Availability set', url: `${L}/azure/virtual-machines/availability-set-overview` },
              { label: 'Azure Virtual Desktop', url: `${L}/azure/virtual-desktop/overview` },
            ],
          },
          {
            id: 'cn-vmres',
            title: 'Tài nguyên cần cho một máy ảo',
            objective: 'Describe the resources required for virtual machines',
            overview:
              'Tạo một máy ảo là tạo kèm cả một bộ: kích cỡ máy (CPU/RAM), ổ đĩa (OS disk và data disk), network interface, virtual network cùng subnet, địa chỉ IP, network security group. Nhớ rằng các thành phần này là resource riêng và vẫn tính tiền kể cả khi máy ảo đã tắt (ổ đĩa, IP tĩnh).',
            links: [
              { label: 'Azure Virtual Machines', url: `${L}/azure/virtual-machines/overview` },
            ],
          },
          {
            id: 'cn-hosting',
            title: 'Tuỳ chọn host ứng dụng',
            objective:
              'Describe application hosting options, including web apps, containers, and virtual machines',
            overview:
              'Azure App Service (web app, API app, mobile backend) là lựa chọn PaaS mặc định cho web. Container dùng khi cần đóng gói kèm môi trường. Máy ảo dùng khi cần toàn quyền hoặc chạy phần mềm cũ. App Service plan quyết định giá và tính năng: Free / Shared (không chạy trên compute riêng), Basic (dedicated compute, custom domain, SSL), Standard (thêm auto-scale, staging slot, cân bằng tải), Premium (mạnh hơn và nhiều slot hơn).',
            links: [
              { label: 'Azure App Service plan', url: `${L}/azure/app-service/overview-hosting-plans` },
            ],
          },
          {
            id: 'cn-vnet',
            title: 'Mạng ảo, peering, DNS, VPN Gateway, ExpressRoute',
            objective:
              'Describe virtual networking, including the purpose of Azure Virtual Networks, Azure virtual subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute',
            overview:
              'Virtual network (VNet) là mạng riêng của bạn trong Azure, chia nhỏ thành subnet. Peering nối hai VNet qua mạng backbone của Microsoft. VPN Gateway nối tại chỗ với Azure qua Internet (có mã hoá). ExpressRoute là đường truyền riêng, KHÔNG đi qua Internet công cộng — chọn khi đề nhắc tới độ tin cậy cao, băng thông lớn, không muốn qua Internet. Network security group (NSG) lọc lưu lượng theo cổng và địa chỉ.',
            links: [
              { label: 'Azure Virtual Network', url: `${L}/azure/virtual-network/virtual-networks-overview` },
              { label: 'ExpressRoute — tổng quan', url: `${L}/azure/expressroute/expressroute-introduction` },
              { label: 'Network security group', url: `${L}/azure/virtual-network/network-security-groups-overview` },
            ],
          },
          {
            id: 'cn-endpoint',
            title: 'Public endpoint và private endpoint',
            objective: 'Define public and private endpoints',
            overview:
              'Public endpoint có địa chỉ IP công cộng, ai cũng tới được qua Internet. Private endpoint gán cho dịch vụ một địa chỉ IP riêng NẰM TRONG VNet của bạn, nhờ vậy lưu lượng đi hoàn toàn trong mạng Microsoft, không lộ ra Internet.',
            links: [
              { label: 'Azure Private Link và private endpoint', url: `${L}/azure/private-link/private-endpoint-overview` },
            ],
          },
        ],
      },
      {
        title: 'Describe Azure storage services',
        topics: [
          {
            id: 'st-services',
            title: 'So sánh các dịch vụ Azure Storage',
            objective: 'Compare Azure Storage services',
            overview:
              'Bốn dịch vụ trong một storage account: Blob (dữ liệu phi cấu trúc, file lớn, backup — cũng là nơi chứa ổ đĩa ảo của máy ảo), File (chia sẻ SMB/NFS, mount được như ổ mạng), Queue (hàng đợi tin nhắn, ghép các phần ứng dụng lại), Table (NoSQL dạng key/attribute). Ngoài ra có Azure Disk cho ổ đĩa gắn vào máy ảo.',
            links: [
              { label: 'Giới thiệu Azure Storage', url: `${L}/azure/storage/common/storage-introduction` },
            ],
          },
          {
            id: 'st-tiers',
            title: 'Tầng lưu trữ (access tier)',
            objective: 'Describe storage tiers',
            overview:
              'Hot: truy cập thường xuyên, giá lưu trữ cao nhất nhưng giá truy cập thấp nhất. Cool: ít truy cập, giữ tối thiểu 30 ngày. Cold: hiếm truy cập hơn nữa, tối thiểu 90 ngày. Archive: lưu trữ lâu dài, rẻ nhất, tối thiểu 180 ngày và phải “rehydrate” (mất hàng giờ) mới đọc được. Quy tắc: càng ít truy cập thì lưu càng rẻ nhưng đọc càng đắt và càng chậm.',
            links: [
              { label: 'Access tier của Blob', url: `${L}/azure/storage/blobs/access-tiers-overview` },
            ],
          },
          {
            id: 'st-redundancy',
            title: 'Tuỳ chọn dự phòng dữ liệu',
            objective: 'Describe redundancy options',
            overview:
              'LRS: 3 bản trong một datacenter — rẻ nhất, chịu được hỏng ổ đĩa hoặc rack. ZRS: 3 bản qua 3 availability zone trong cùng region. GRS: LRS ở region chính cộng nhân bản sang region cặp (bản phụ chỉ đọc được sau khi Microsoft chuyển đổi dự phòng). RA-GRS: giống GRS nhưng ĐỌC ĐƯỢC bản phụ bất cứ lúc nào. GZRS và RA-GZRS: ZRS ở region chính cộng nhân bản sang region cặp. Mọi dữ liệu trong Azure Storage luôn có tối thiểu ba bản.',
            links: [
              { label: 'Azure Storage redundancy', url: `${L}/azure/storage/common/storage-redundancy` },
            ],
          },
          {
            id: 'st-account',
            title: 'Storage account và loại lưu trữ',
            objective: 'Describe storage account options and storage types',
            overview:
              'Storage account là hộp chứa và cũng là namespace duy nhất trên toàn Azure — tên không được trùng với bất kỳ ai, chỉ dùng chữ thường và số, dài 3–24 ký tự. Các loại chính: Standard general-purpose v2 (mặc định, dùng được cả 4 dịch vụ), Premium block blob, Premium file share, Premium page blob.',
            links: [
              { label: 'Storage account — tổng quan', url: `${L}/azure/storage/common/storage-account-overview` },
            ],
          },
          {
            id: 'st-move',
            title: 'Công cụ chuyển file',
            objective:
              'Identify options for moving files, including AzCopy, Azure Storage Explorer, and Azure File Sync',
            overview:
              'AzCopy: công cụ dòng lệnh, sao chép dữ liệu lên, xuống hoặc giữa các storage account, đồng bộ một chiều. Azure Storage Explorer: ứng dụng có giao diện đồ hoạ, dùng AzCopy bên dưới. Azure File Sync: đồng bộ file server tại chỗ với Azure Files, biến máy chủ tại chỗ thành bộ nhớ đệm.',
            links: [
              { label: 'AzCopy', url: `${L}/azure/storage/common/storage-use-azcopy-v10` },
              { label: 'Azure File Sync', url: `${L}/azure/storage/file-sync/file-sync-introduction` },
            ],
          },
          {
            id: 'st-migrate',
            title: 'Azure Migrate và Azure Data Box',
            objective: 'Describe migration options, including Azure Migrate and Azure Data Box',
            overview:
              'Azure Migrate: bộ công cụ khảo sát và di chuyển máy chủ, database, ứng dụng web lên Azure — bắt đầu bằng bước đánh giá (assessment). Azure Data Box: thiết bị vật lý Microsoft gửi tới tận nơi để chép dữ liệu rất lớn (hàng chục tới hàng trăm TB) rồi gửi trả — dùng khi đường truyền quá chậm để tải lên.',
            links: [
              { label: 'Azure Migrate', url: `${L}/azure/migrate/migrate-services-overview` },
              { label: 'Azure Data Box', url: `${L}/azure/databox/data-box-overview` },
            ],
          },
        ],
      },
      {
        title: 'Describe Azure identity, access, and security',
        topics: [
          {
            id: 'id-directory',
            title: 'Microsoft Entra ID và Domain Services',
            objective:
              'Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services',
            overview:
              'Microsoft Entra ID (tên cũ: Azure Active Directory) là dịch vụ danh tính trên cloud — quản lý người dùng, nhóm và việc đăng nhập vào Azure lẫn Microsoft 365. Nó KHÁC Active Directory Domain Services tại chỗ: không có group policy, không có LDAP/Kerberos truyền thống. Microsoft Entra Domain Services cung cấp domain có quản lý (join domain, group policy, LDAP) mà không cần dựng domain controller. Azure AD Connect đồng bộ danh tính tại chỗ lên cloud.',
            links: [
              { label: 'Microsoft Entra ID là gì', url: `${L}/entra/fundamentals/whatis` },
              { label: 'Microsoft Entra Domain Services', url: `${L}/entra/identity/domain-services/overview` },
            ],
          },
          {
            id: 'id-auth',
            title: 'SSO, MFA và passwordless',
            objective:
              'Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless',
            overview:
              'SSO: đăng nhập một lần dùng được nhiều ứng dụng. MFA: xác thực bằng ít nhất hai trong ba yếu tố — thứ bạn BIẾT (mật khẩu), thứ bạn CÓ (điện thoại, token), thứ bạn LÀ (vân tay, khuôn mặt). Passwordless bỏ hẳn mật khẩu: Windows Hello, Microsoft Authenticator, khoá bảo mật FIDO2.',
            links: [
              { label: 'Xác thực đa yếu tố', url: `${L}/entra/identity/authentication/concept-mfa-howitworks` },
              { label: 'Passwordless', url: `${L}/entra/identity/authentication/concept-authentication-passwordless` },
            ],
          },
          {
            id: 'id-external',
            title: 'Danh tính bên ngoài (B2B / B2C)',
            objective:
              'Describe external identities in Azure, including business-to-business (B2B) and business-to-customer (B2C)',
            overview:
              'B2B: mời đối tác hoặc nhà thầu dùng chính tài khoản sẵn có của họ để truy cập tài nguyên của bạn (guest user). B2C: giải pháp danh tính cho khách hàng dùng ứng dụng của bạn, cho phép đăng nhập bằng tài khoản mạng xã hội hoặc email cá nhân.',
            links: [
              { label: 'External identities', url: `${L}/entra/external-id/external-identities-overview` },
            ],
          },
          {
            id: 'id-conditional',
            title: 'Conditional Access',
            objective: 'Describe Microsoft Entra Conditional Access',
            overview:
              'Câu lệnh “nếu — thì” cho việc đăng nhập: thu thập tín hiệu (ai đăng nhập, từ thiết bị nào, ở đâu, ứng dụng nào, mức rủi ro ra sao) rồi ra quyết định cho phép, chặn, hay bắt xác thực thêm bằng MFA. Gồm hai phần: Assignments (điều kiện) và Access controls (hành động).',
            links: [
              { label: 'Conditional Access', url: `${L}/entra/identity/conditional-access/overview` },
            ],
          },
          {
            id: 'id-rbac',
            title: 'Azure RBAC',
            objective: 'Describe Azure role-based access control (RBAC)',
            overview:
              'Phân quyền theo vai trò: gán vai trò (Owner, Contributor, Reader, User Access Administrator…) cho người dùng hoặc nhóm tại một phạm vi (management group, subscription, resource group, resource). Quyền được KẾ THỪA xuống dưới. Nhớ phân biệt: Entra ID lo XÁC THỰC (bạn là ai), RBAC lo PHÂN QUYỀN (bạn được làm gì).',
            links: [
              { label: 'Azure RBAC — tổng quan', url: `${L}/azure/role-based-access-control/overview` },
              { label: 'Các vai trò dựng sẵn', url: `${L}/azure/role-based-access-control/built-in-roles` },
            ],
          },
          {
            id: 'id-zerotrust',
            title: 'Zero Trust',
            objective: 'Describe the concept of Zero Trust',
            overview:
              'Nguyên tắc “không tin ai mặc định, luôn kiểm chứng”. Ba trụ cột: verify explicitly (luôn xác thực và cấp quyền dựa trên mọi dữ liệu có được), use least privilege access (cấp quyền tối thiểu và có thời hạn), assume breach (giả định đã bị xâm nhập — chia nhỏ phạm vi, mã hoá, giám sát).',
            links: [
              { label: 'Zero Trust', url: `${L}/security/zero-trust/zero-trust-overview` },
            ],
          },
          {
            id: 'id-defense',
            title: 'Defense in depth',
            objective: 'Describe the purpose of the defense-in-depth model',
            overview:
              'Phòng thủ nhiều lớp, mỗi lớp làm chậm kẻ tấn công. Thứ tự từ ngoài vào: Physical security → Identity & access → Perimeter (DDoS Protection, firewall) → Network (phân đoạn mạng, NSG) → Compute (vá lỗi, đóng cổng) → Application → Data. Lớp trong cùng và cũng là mục tiêu cuối cùng chính là DỮ LIỆU.',
            links: [
              { label: 'Defense in depth', url: `${L}/azure/security/fundamentals/overview` },
            ],
          },
          {
            id: 'id-defender',
            title: 'Microsoft Defender for Cloud',
            objective: 'Describe the purpose of Microsoft Defender for Cloud',
            overview:
              'Tên cũ: Azure Security Center. Theo dõi tình trạng bảo mật của tài nguyên Azure, tài nguyên tại chỗ và cả trên cloud khác; chấm điểm Secure Score, đưa khuyến nghị khắc phục, cảnh báo mối đe doạ và giúp đối chiếu với các chuẩn tuân thủ. Microsoft Sentinel (tên cũ Azure Sentinel) là SIEM/SOAR — thu thập và tự động phân tích sự kiện bảo mật.',
            links: [
              { label: 'Microsoft Defender for Cloud', url: `${L}/azure/defender-for-cloud/defender-for-cloud-introduction` },
              { label: 'Microsoft Sentinel', url: `${L}/azure/sentinel/overview` },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd3',
    title: 'Quản lý và quản trị Azure',
    objective: 'Describe Azure management and governance',
    weight: '30–35%',
    intro:
      'Phần về tiền và về kiểm soát: quản lý chi phí, đặt luật lệ cho tổ chức (governance và compliance), các công cụ để tạo và quản lý tài nguyên, và cuối cùng là bộ công cụ giám sát.',
    groups: [
      {
        title: 'Describe cost management in Azure',
        topics: [
          {
            id: 'cm-factors',
            title: 'Yếu tố ảnh hưởng chi phí',
            objective: 'Describe factors that can affect costs in Azure',
            overview:
              'Loại tài nguyên và cấu hình, mức sử dụng, khu vực (giá khác nhau giữa các region), lưu lượng ra Internet (dữ liệu VÀO Azure thì miễn phí, dữ liệu RA mới tính tiền), loại subscription và hợp đồng, băng thông giữa các region. Cách tiết kiệm: reserved instance (cam kết 1–3 năm), Azure Hybrid Benefit (tận dụng license Windows/SQL sẵn có), spot VM, và tắt máy khi không dùng.',
            links: [
              { label: 'Lập kế hoạch và quản lý chi phí', url: `${L}/azure/cost-management-billing/understand/plan-manage-costs` },
            ],
          },
          {
            id: 'cm-calculators',
            title: 'Pricing calculator và TCO calculator',
            objective:
              'Compare the Pricing calculator and the Total Cost of Ownership (TCO) calculator',
            overview:
              'Pricing calculator: ƯỚC TÍNH chi phí của một cấu hình Azure bạn định dựng — chọn dịch vụ, khu vực, cấu hình rồi ra con số. TCO calculator: SO SÁNH chi phí đang chạy tại chỗ với chi phí khi chuyển lên Azure, để dựng luận điểm chuyển đổi. Đề hay hỏi để phân biệt hai công cụ này.',
            links: [
              { label: 'Pricing calculator', url: 'https://azure.microsoft.com/pricing/calculator/' },
              { label: 'TCO calculator', url: 'https://azure.microsoft.com/pricing/tco/calculator/' },
            ],
          },
          {
            id: 'cm-tools',
            title: 'Microsoft Cost Management',
            objective: 'Describe cost management capabilities in Azure',
            overview:
              'Công cụ theo dõi chi phí THỰC TẾ đã phát sinh: phân tích chi tiêu (cost analysis), đặt ngân sách (budget) và cảnh báo khi sắp vượt, xuất báo cáo, và gợi ý tiết kiệm. Khác hai calculator ở chỗ nó nhìn về quá khứ và hiện tại, không phải ước tính tương lai.',
            links: [
              { label: 'Microsoft Cost Management', url: `${L}/azure/cost-management-billing/cost-management-billing-overview` },
            ],
          },
          {
            id: 'cm-tags',
            title: 'Tag (thẻ tài nguyên)',
            objective: 'Describe the purpose of tags',
            overview:
              'Cặp tên/giá trị gắn vào tài nguyên để phân loại — ví dụ Department=Finance, Environment=Production. Dùng để lọc báo cáo chi phí và gom nhóm tài nguyên theo chiều khác với resource group. Lưu ý: tag KHÔNG tự kế thừa từ resource group xuống resource; muốn bắt buộc gắn tag thì dùng Azure Policy.',
            links: [
              { label: 'Gắn tag cho tài nguyên', url: `${L}/azure/azure-resource-manager/management/tag-resources` },
            ],
          },
        ],
      },
      {
        title: 'Describe features and tools in Azure for governance and compliance',
        topics: [
          {
            id: 'gc-purview',
            title: 'Microsoft Purview',
            objective: 'Describe the purpose of Microsoft Purview in Azure',
            overview:
              'Bộ giải pháp quản trị và tuân thủ dữ liệu: lập bản đồ toàn bộ dữ liệu của tổ chức (data map), danh mục dữ liệu để tìm kiếm, phân loại dữ liệu nhạy cảm và theo dõi dòng chảy dữ liệu (data lineage) trên cả Azure, tại chỗ lẫn cloud khác.',
            links: [
              { label: 'Microsoft Purview', url: `${L}/purview/purview` },
            ],
          },
          {
            id: 'gc-policy',
            title: 'Azure Policy và Blueprints',
            objective: 'Describe the purpose of Azure Policy',
            overview:
              'Đặt và bắt buộc quy tắc cho tài nguyên: chỉ được tạo ở region nào, chỉ được dùng cỡ máy ảo nào, bắt buộc phải có tag. Policy có thể chặn hành động (deny), ghi nhận vi phạm (audit) hoặc tự sửa (deployIfNotExists), và báo cáo mức độ tuân thủ. Phân biệt với RBAC: RBAC quản AI ĐƯỢC LÀM GÌ, Policy quản ĐƯỢC TẠO RA CÁI GÌ. Initiative là một nhóm policy. Azure Blueprints đóng gói policy, RBAC và ARM template thành bộ triển khai lặp lại được.',
            links: [
              { label: 'Azure Policy — tổng quan', url: `${L}/azure/governance/policy/overview` },
              { label: 'Azure Blueprints', url: `${L}/azure/governance/blueprints/overview` },
            ],
          },
          {
            id: 'gc-locks',
            title: 'Resource lock',
            objective: 'Describe the purpose of resource locks',
            overview:
              'Khoá chống thao tác nhầm, áp được ở mức subscription, resource group hoặc từng resource và kế thừa xuống dưới. Hai loại: Delete (CannotDelete — sửa được, không xoá được) và Read-only (chỉ đọc, không sửa không xoá). Khoá chặn cả Owner — muốn xoá thì phải gỡ khoá trước. Lưu ý: lock KHÔNG chặn theo người dùng, đó là việc của RBAC.',
            links: [
              { label: 'Khoá tài nguyên', url: `${L}/azure/azure-resource-manager/management/lock-resources` },
            ],
          },
          {
            id: 'gc-trust',
            title: 'Service Trust Portal và Trust Center',
            objective: 'Describe the purpose of the Service Trust Portal',
            overview:
              'Cổng công khai chứa báo cáo kiểm toán, chứng chỉ tuân thủ (ISO, SOC, GDPR…), tài liệu bảo mật và quyền riêng tư của Microsoft. Compliance Manager nằm trong đó, giúp chấm điểm và theo dõi mức độ tuân thủ của tổ chức bạn. Trust Center là trang giới thiệu tổng quan về cam kết bảo mật, quyền riêng tư và tuân thủ.',
            links: [
              { label: 'Service Trust Portal', url: 'https://servicetrust.microsoft.com/' },
              { label: 'Microsoft Trust Center', url: 'https://www.microsoft.com/trust-center' },
            ],
          },
        ],
      },
      {
        title: 'Describe features and tools for managing and deploying Azure resources',
        topics: [
          {
            id: 'mg-portal',
            title: 'Azure portal',
            objective: 'Describe the Azure portal',
            overview:
              'Giao diện web đồ hoạ để tạo và quản lý mọi thứ trong Azure, có dashboard tuỳ biến. Ngoài portal còn có ứng dụng Azure trên điện thoại. Portal phù hợp cho thao tác lẻ và xem trực quan; việc lặp lại nhiều lần nên dùng CLI, PowerShell hoặc ARM template.',
            links: [
              { label: 'Azure portal', url: `${L}/azure/azure-portal/azure-portal-overview` },
            ],
          },
          {
            id: 'mg-shell',
            title: 'Cloud Shell, Azure CLI, Azure PowerShell',
            objective: 'Describe Azure Cloud Shell, including Azure CLI and Azure PowerShell',
            overview:
              'Azure Cloud Shell là terminal chạy ngay trong trình duyệt, không cần cài gì, chọn được Bash hoặc PowerShell, có sẵn cả Azure CLI lẫn Azure PowerShell — nên chạy được từ bất kỳ hệ điều hành nào, kể cả Chrome OS hay điện thoại. Azure CLI dùng cú pháp az…, chạy trên Windows, Linux và macOS. Azure PowerShell là bộ cmdlet, cần có PowerShell. Mẹo làm bài: cần chạy PowerShell script mà máy không phải Windows → dùng Cloud Shell, hoặc cài PowerShell Core cùng module Azure PowerShell.',
            links: [
              { label: 'Azure Cloud Shell', url: `${L}/azure/cloud-shell/overview` },
              { label: 'Azure CLI là gì', url: `${L}/cli/azure/what-is-azure-cli` },
            ],
          },
          {
            id: 'mg-arc',
            title: 'Azure Arc',
            objective: 'Describe the purpose of Azure Arc',
            overview:
              'Kéo máy chủ tại chỗ, máy chủ ở cloud khác, cụm Kubernetes và một số database vào quản lý bằng chính công cụ của Azure — áp Azure Policy, gắn tag, dùng Defender for Cloud cho chúng như thể chúng là tài nguyên Azure.',
            links: [
              { label: 'Azure Arc — tổng quan', url: `${L}/azure/azure-arc/overview` },
            ],
          },
          {
            id: 'mg-arm',
            title: 'Azure Resource Manager và ARM template',
            objective: 'Describe Azure Resource Manager (ARM) and Azure ARM templates',
            overview:
              'ARM là lớp quản lý mà MỌI yêu cầu đều đi qua — portal, CLI, PowerShell và SDK đều gọi cùng một API. ARM template là file JSON mô tả hạ tầng (infrastructure as code): khai báo kết quả mong muốn, triển khai lặp lại được, idempotent (chạy nhiều lần vẫn ra một kết quả). Bicep là ngôn ngữ gọn hơn, biên dịch ra ARM template. Đề hay hỏi: cần tạo hàng loạt tài nguyên giống nhau, tự động và lặp lại → ARM template.',
            links: [
              { label: 'Azure Resource Manager', url: `${L}/azure/azure-resource-manager/management/overview` },
              { label: 'ARM template', url: `${L}/azure/azure-resource-manager/templates/overview` },
            ],
          },
        ],
      },
      {
        title: 'Describe monitoring tools in Azure',
        topics: [
          {
            id: 'mo-advisor',
            title: 'Azure Advisor',
            objective: 'Describe the purpose of Azure Advisor',
            overview:
              'Đưa khuyến nghị cá nhân hoá cho tài nguyên của bạn theo năm nhóm: Reliability, Security, Performance, Cost, Operational excellence. Lưu ý: Advisor khuyến nghị dựa trên tài nguyên ĐANG CHẠY — nó không ước tính giá cho hệ thống chưa dựng, việc đó là của Pricing calculator.',
            links: [
              { label: 'Azure Advisor', url: `${L}/azure/advisor/advisor-overview` },
            ],
          },
          {
            id: 'mo-servicehealth',
            title: 'Azure Service Health',
            objective: 'Describe Azure Service Health',
            overview:
              'Ba mức: Azure status (tình hình toàn cầu của mọi dịch vụ), Service health (sự cố ảnh hưởng tới ĐÚNG các dịch vụ và region bạn đang dùng, kèm bảo trì theo kế hoạch), Resource health (tình trạng của từng tài nguyên cụ thể). Đề hay hỏi để phân biệt ba mức này.',
            links: [
              { label: 'Azure Service Health', url: `${L}/azure/service-health/overview` },
            ],
          },
          {
            id: 'mo-monitor',
            title: 'Azure Monitor, Log Analytics, Alerts, Application Insights',
            objective:
              'Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Application Insights',
            overview:
              'Azure Monitor là nền tảng thu thập metric và log của mọi tài nguyên. Log Analytics là nơi lưu và truy vấn log bằng ngôn ngữ KQL. Alerts kích hoạt hành động (email, webhook, runbook) khi vượt ngưỡng. Application Insights theo dõi hiệu năng và lỗi bên trong ứng dụng — thời gian phản hồi, tỉ lệ lỗi, hành vi người dùng.',
            links: [
              { label: 'Azure Monitor — tổng quan', url: `${L}/azure/azure-monitor/overview` },
              { label: 'Application Insights', url: `${L}/azure/azure-monitor/app/app-insights-overview` },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd4',
    title: 'Chủ đề mở rộng (ngoài đề cương hiện hành)',
    objective: 'Legacy and adjacent topics found in the question bank',
    weight: 'MỞ RỘNG',
    intro:
      'Bộ slide gốc ra đời trước bản cập nhật đề cương AZ-900 và có kèm một số chủ đề nay đã bị Microsoft bỏ khỏi phần Skills measured — rõ nhất là gói hỗ trợ (support plan) và vòng đời dịch vụ (preview / GA). Ngoài ra còn một nhóm câu điểm danh các dịch vụ Azure khác (AI, IoT, dữ liệu lớn, DevOps) mà đề cương hiện hành không còn hỏi tên riêng. Những câu này KHÔNG còn nằm trong đề thi chính thức, nhưng vẫn để đây vì chúng giúp hiểu bức tranh chung về Azure — hãy ưu tiên ba phần trên trước.',
    groups: [
      {
        title: 'Azure support plans',
        topics: [
          {
            id: 'ex-support',
            title: 'Gói hỗ trợ Azure',
            objective: 'Describe Azure support plans (đã bỏ khỏi đề cương hiện hành)',
            overview:
              'Bốn gói: Basic (miễn phí cho mọi tài khoản, chỉ có tài liệu và cộng đồng — KHÔNG mở được ticket kỹ thuật), Developer (giờ hành chính, dùng cho môi trường thử nghiệm), Standard (24/7, dùng cho môi trường chạy thật), Professional Direct (24/7 cộng thêm tư vấn kiến trúc và ProDirect delivery manager). Từ Developer trở lên đều mở được yêu cầu hỗ trợ. Đề cũ hay hỏi: gói rẻ nhất mà vẫn có đánh giá kiến trúc → Professional Direct; cần hỗ trợ 24/7 rẻ nhất → Standard.',
            links: [
              { label: 'Các gói hỗ trợ Azure', url: 'https://azure.microsoft.com/support/plans/' },
            ],
          },
        ],
      },
      {
        title: 'Service lifecycle: preview and general availability',
        topics: [
          {
            id: 'ex-lifecycle',
            title: 'Vòng đời dịch vụ: preview và GA',
            objective: 'Describe the Azure service lifecycle (đã bỏ khỏi đề cương hiện hành)',
            overview:
              'Private preview: chỉ khách hàng được mời. Public preview: ai cũng dùng thử được nhưng KHÔNG có SLA, KHÔNG khuyến nghị dùng cho môi trường chạy thật, và hỗ trợ bị giới hạn. General availability (GA): phát hành rộng rãi, có SLA đầy đủ. Modern Lifecycle Policy: Microsoft báo trước tối thiểu 12 tháng trước khi ngừng hỗ trợ một dịch vụ không có dịch vụ kế nhiệm.',
            links: [
              { label: 'Azure preview và bản cập nhật', url: 'https://azure.microsoft.com/updates/' },
              { label: 'Modern Lifecycle Policy', url: 'https://learn.microsoft.com/lifecycle/policies/modern' },
            ],
          },
        ],
      },
      {
        title: 'Cloud Adoption Framework and DevOps',
        topics: [
          {
            id: 'ex-caf',
            title: 'Cloud Adoption Framework',
            objective: 'Describe the Microsoft Cloud Adoption Framework for Azure',
            overview:
              'Bộ hướng dẫn theo giai đoạn để đưa một tổ chức lên cloud: Strategy → Plan → Ready → Adopt (Migrate / Innovate) → Govern → Manage. Giai đoạn ĐẦU TIÊN là Strategy (xác định lý do và kết quả kinh doanh mong muốn).',
            links: [
              { label: 'Cloud Adoption Framework', url: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview' },
            ],
          },
          {
            id: 'ex-devops',
            title: 'Azure DevOps và công cụ cho lập trình viên',
            objective: 'Describe Azure DevOps and developer tooling',
            overview:
              'Azure DevOps gồm Azure Repos (kho Git), Azure Pipelines (CI/CD), Azure Boards (quản lý công việc), Azure Test Plans và Azure Artifacts. GitHub Actions cũng làm CI/CD. Đề cũ hay hỏi cách triển khai hoặc cập nhật ứng dụng lên Azure bằng pipeline CI/CD.',
            links: [
              { label: 'Azure DevOps', url: 'https://learn.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops' },
            ],
          },
        ],
      },
      {
        title: 'Other Azure services (AI, IoT, data and analytics)',
        topics: [
          {
            id: 'ex-services',
            title: 'Các dịch vụ Azure khác',
            objective: 'Identify other Azure services by purpose',
            overview:
              'Nhóm câu điểm danh dịch vụ theo công dụng. AI và học máy: Azure Machine Learning (dựng, huấn luyện và triển khai mô hình dự đoán), Azure AI services, Azure Bot Service. IoT: IoT Hub (giao tiếp hai chiều, GIÁM SÁT VÀ ĐIỀU KHIỂN thiết bị), IoT Central (SaaS làm sẵn), Azure Sphere (bảo mật thiết bị). Dữ liệu lớn: HDInsight (Hadoop/Spark), Azure Databricks (Apache Spark), Azure Synapse Analytics (kho dữ liệu), Azure Data Factory (ETL), Stream Analytics (phân tích luồng thời gian thực). Cơ sở dữ liệu: Azure Cosmos DB (NoSQL đa mô hình — key-value, document, column-family, graph), Azure SQL Database.',
            links: [
              { label: 'Danh mục sản phẩm Azure', url: 'https://azure.microsoft.com/products/' },
              { label: 'Azure IoT Hub', url: 'https://learn.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub' },
              { label: 'Azure Machine Learning', url: 'https://learn.microsoft.com/en-us/azure/machine-learning/overview-what-is-azure-machine-learning' },
            ],
          },
        ],
      },
    ],
  },
];

/** Tra cứu nhanh theo id chủ đề. */
export const TOPIC_BY_ID: Record<string, StudyTopic> = {};
export const DOMAIN_OF_TOPIC: Record<string, DomainId> = {};
for (const d of DOMAINS) {
  // gắn bản tiếng Anh vào đúng phần thi / chủ đề
  const de = DOMAIN_EN[d.id];
  if (de) {
    d.titleEn = de.title;
    d.introEn = de.intro;
  }
  for (const g of d.groups) {
    for (const t of g.topics) {
      const te = TOPIC_EN[t.id];
      if (te) {
        t.titleEn = te.title;
        t.overviewEn = te.overview;
      }
      TOPIC_BY_ID[t.id] = t;
      DOMAIN_OF_TOPIC[t.id] = d.id;
    }
  }
}

export const DOMAIN_BY_ID: Record<string, StudyDomain> = Object.fromEntries(
  DOMAINS.map((d) => [d.id, d]),
);
