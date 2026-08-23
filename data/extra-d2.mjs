/**
 * Câu hỏi BỔ SUNG — phần thi d2 (Azure architecture and services).
 * Bù cho các chủ đề trong đề cương mà bộ slide PDF gốc không có câu nào.
 * Nguồn song ngữ: q/o/e là tiếng Anh, vq/vo/ve là bản dịch tiếng Việt.
 */
export default [
  /* ---------------- ar-dc: datacenter ---------------- */
  {
    id: 1022,
    topic: 'ar-dc',
    type: 'single',
    q: ['What is an Azure datacenter?'],
    o: [
      ['A physical facility of servers with its own power, cooling and networking', true],
      ['A group of regions inside the same country', false],
      ['A logical container for Azure resources', false],
      ['A pair of regions used for replication', false],
    ],
    e: [
      [
        'A datacenter is the smallest physical unit of Azure: a building full of racks with dedicated power, cooling and network.',
        'Several datacenters make an availability zone, several zones make a region, several regions make a geography. A logical container for resources is a resource group.',
      ],
    ],
    vq: ['Azure datacenter là gì?'],
    vo: [
      'Một cơ sở vật lý chứa máy chủ, có nguồn điện, hệ thống làm mát và mạng riêng',
      'Một nhóm các region nằm trong cùng một quốc gia',
      'Một hộp chứa logic cho tài nguyên Azure',
      'Một cặp region dùng để nhân bản dữ liệu',
    ],
    ve: [
      [
        'Datacenter là đơn vị vật lý nhỏ nhất của Azure: một toà nhà đầy tủ rack, có nguồn điện, làm mát và mạng riêng.',
        'Nhiều datacenter tạo thành một availability zone, nhiều zone tạo thành một region, nhiều region tạo thành một geography. Hộp chứa logic cho tài nguyên là resource group.',
      ],
    ],
  },

  {
    id: 1023,
    topic: 'ar-dc',
    type: 'yesno',
    q: ['A customer can choose the individual Azure datacenter in which a virtual machine is placed.'],
    subs: [{ p: '', o: ['Yes', 'No'], a: 1 }],
    e: [
      [
        'Customers choose a region, and optionally an availability zone. Microsoft decides which physical datacenter inside that zone actually hosts the resource — individual datacenters are not exposed to customers.',
      ],
    ],
    vq: ['Khách hàng có thể chọn đích danh datacenter của Azure để đặt một máy ảo.'],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Khách hàng chọn region, và tuỳ chọn thêm availability zone. Microsoft mới là bên quyết định datacenter vật lý nào trong zone đó thực sự chứa tài nguyên — từng datacenter riêng lẻ không lộ ra cho khách hàng.',
      ],
    ],
  },

  {
    id: 1024,
    topic: 'ar-dc',
    type: 'match',
    q: [
      'Put the Azure physical infrastructure units in order from the smallest to the largest.',
      'Select the correct unit for each position.',
    ],
    subs: [
      { p: 'Smallest unit', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'], a: 0 },
      { p: 'Second smallest', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'], a: 1 },
      { p: 'Second largest', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'], a: 2 },
      { p: 'Largest unit', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'], a: 3 },
    ],
    e: [
      [
        'Datacenter → availability zone → region → geography.',
        'A geography is a discrete market (often a country) that contains one or more regions and defines where data can reside for compliance purposes.',
      ],
    ],
    vq: [
      'Sắp xếp các đơn vị hạ tầng vật lý của Azure từ nhỏ nhất tới lớn nhất.',
      'Chọn đúng đơn vị cho từng vị trí.',
    ],
    vsubs: [
      { p: 'Đơn vị nhỏ nhất', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'] },
      { p: 'Nhỏ thứ hai', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'] },
      { p: 'Lớn thứ hai', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'] },
      { p: 'Đơn vị lớn nhất', o: ['Datacenter', 'Availability zone', 'Region', 'Geography'] },
    ],
    ve: [
      [
        'Datacenter → availability zone → region → geography.',
        'Geography là một thị trường tách biệt (thường là một quốc gia) chứa một hoặc nhiều region và xác định nơi dữ liệu được phép nằm để phục vụ yêu cầu tuân thủ.',
      ],
    ],
  },

  /* ---------------- ar-hierarchy: hệ thống phân cấp ---------------- */
  {
    id: 1025,
    topic: 'ar-hierarchy',
    type: 'match',
    q: [
      'Put the Azure management scopes in order from the top of the hierarchy down to the bottom.',
      'Select the correct scope for each position.',
    ],
    subs: [
      {
        p: 'Highest scope',
        o: ['Management group', 'Subscription', 'Resource group', 'Resource'],
        a: 0,
      },
      {
        p: 'Second highest',
        o: ['Management group', 'Subscription', 'Resource group', 'Resource'],
        a: 1,
      },
      {
        p: 'Third highest',
        o: ['Management group', 'Subscription', 'Resource group', 'Resource'],
        a: 2,
      },
      {
        p: 'Lowest scope',
        o: ['Management group', 'Subscription', 'Resource group', 'Resource'],
        a: 3,
      },
    ],
    e: [
      [
        'Management group → subscription → resource group → resource.',
        'Settings applied at a higher scope — RBAC role assignments, Azure Policy, resource locks — are inherited by everything below.',
      ],
    ],
    vq: [
      'Sắp xếp các phạm vi quản lý của Azure từ trên xuống dưới trong hệ thống phân cấp.',
      'Chọn đúng phạm vi cho từng vị trí.',
    ],
    vsubs: [
      {
        p: 'Phạm vi cao nhất',
        o: ['Management group', 'Subscription', 'Resource group', 'Resource'],
      },
      { p: 'Cao thứ hai', o: ['Management group', 'Subscription', 'Resource group', 'Resource'] },
      { p: 'Cao thứ ba', o: ['Management group', 'Subscription', 'Resource group', 'Resource'] },
      {
        p: 'Phạm vi thấp nhất',
        o: ['Management group', 'Subscription', 'Resource group', 'Resource'],
      },
    ],
    ve: [
      [
        'Management group → subscription → resource group → resource.',
        'Thiết lập áp ở phạm vi cao hơn — gán vai trò RBAC, Azure Policy, resource lock — đều được kế thừa xuống mọi thứ bên dưới.',
      ],
    ],
  },

  {
    id: 1026,
    topic: 'ar-hierarchy',
    type: 'single',
    q: [
      'You assign the Reader role to a group at the subscription scope.',
      'What is the effect on the resource groups and resources inside that subscription?',
    ],
    o: [
      ['They all inherit the Reader role', true],
      ['Nothing — the role must be assigned to each resource group separately', false],
      ['Only resource groups inherit it, not the resources inside them', false],
      ['Existing resources inherit it but new resources do not', false],
    ],
    e: [
      [
        'RBAC assignments flow downward through the hierarchy. A role assigned at the subscription applies to every resource group and every resource in it, including ones created later.',
      ],
    ],
    vq: [
      'Bạn gán vai trò Reader cho một nhóm ở phạm vi subscription.',
      'Điều gì xảy ra với các resource group và tài nguyên bên trong subscription đó?',
    ],
    vo: [
      'Tất cả đều kế thừa vai trò Reader',
      'Không có gì — phải gán vai trò cho từng resource group riêng',
      'Chỉ resource group kế thừa, còn tài nguyên bên trong thì không',
      'Tài nguyên hiện có thì kế thừa, tài nguyên tạo sau thì không',
    ],
    ve: [
      [
        'Việc gán vai trò RBAC chảy xuống theo hệ thống phân cấp. Vai trò gán ở subscription áp cho mọi resource group và mọi tài nguyên trong đó, kể cả tài nguyên tạo ra sau này.',
      ],
    ],
  },

  {
    id: 1027,
    topic: 'ar-hierarchy',
    type: 'yesno_table',
    q: [
      'For each of the following statements about the Azure resource hierarchy, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      { p: 'A resource group can contain another resource group.', o: ['Yes', 'No'], a: 1 },
      { p: 'A management group can contain another management group.', o: ['Yes', 'No'], a: 0 },
      { p: 'A resource can belong to more than one resource group at the same time.', o: ['Yes', 'No'], a: 1 },
    ],
    e: [
      [
        'Resource groups are flat — they never nest, and a resource belongs to exactly one of them.',
        'Management groups are the one level that does nest, up to six levels deep below the root management group.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về hệ thống phân cấp tài nguyên của Azure, chọn Yes nếu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Một resource group có thể chứa một resource group khác.', o: ['Yes', 'No'] },
      { p: 'Một management group có thể chứa một management group khác.', o: ['Yes', 'No'] },
      { p: 'Một tài nguyên có thể cùng lúc thuộc nhiều resource group.', o: ['Yes', 'No'] },
    ],
    ve: [
      [
        'Resource group là phẳng — không bao giờ lồng nhau, và một tài nguyên chỉ thuộc đúng một resource group.',
        'Management group là tầng duy nhất lồng nhau được, tối đa sáu tầng dưới management group gốc.',
      ],
    ],
  },

  {
    id: 1028,
    topic: 'ar-hierarchy',
    type: 'single',
    q: [
      'Your organisation has 30 Azure subscriptions and must apply the same Azure Policy to all of them with the least administrative effort.',
      'At which scope should the policy be assigned?',
    ],
    o: [
      ['A management group that contains all 30 subscriptions', true],
      ['Each of the 30 subscriptions individually', false],
      ['Each resource group in every subscription', false],
      ['Each resource in every subscription', false],
    ],
    e: [
      [
        'Management groups exist precisely for this: assign the policy once at a management group and every subscription beneath it inherits the assignment.',
        'The other options all mean repeating the work many times.',
      ],
    ],
    vq: [
      'Tổ chức của bạn có 30 subscription Azure và cần áp cùng một Azure Policy cho tất cả với ít công sức quản trị nhất.',
      'Nên gán policy ở phạm vi nào?',
    ],
    vo: [
      'Một management group chứa cả 30 subscription',
      'Từng subscription trong số 30 subscription',
      'Từng resource group trong mọi subscription',
      'Từng tài nguyên trong mọi subscription',
    ],
    ve: [
      [
        'Management group sinh ra đúng cho việc này: gán policy một lần ở management group và mọi subscription bên dưới đều kế thừa.',
        'Các phương án còn lại đều đồng nghĩa với việc lặp lại công việc rất nhiều lần.',
      ],
    ],
  },

  /* ---------------- cn-endpoint: public / private endpoint ---------------- */
  {
    id: 1029,
    topic: 'cn-endpoint',
    type: 'single',
    q: [
      'You need an Azure Storage account to be reachable from a virtual machine in your virtual network without any traffic traversing the public internet.',
      'What should you use?',
    ],
    o: [
      ['A private endpoint', true],
      ['A public endpoint with a firewall rule', false],
      ['A VPN gateway', false],
      ['A network security group', false],
    ],
    e: [
      [
        'A private endpoint gives the storage account a private IP address inside your virtual network, so traffic stays entirely on the Microsoft backbone.',
        'A public endpoint plus a firewall rule still sends traffic over the public internet, just restricted by source address.',
      ],
    ],
    vq: [
      'Bạn cần một Azure Storage account truy cập được từ một máy ảo trong virtual network của mình mà không có lưu lượng nào đi qua Internet công cộng.',
      'Bạn nên dùng gì?',
    ],
    vo: [
      'Private endpoint',
      'Public endpoint kèm quy tắc tường lửa',
      'VPN gateway',
      'Network security group',
    ],
    ve: [
      [
        'Private endpoint gán cho storage account một địa chỉ IP riêng nằm trong virtual network của bạn, nhờ vậy lưu lượng đi hoàn toàn trong mạng backbone của Microsoft.',
        'Public endpoint kèm quy tắc tường lửa thì lưu lượng vẫn đi qua Internet công cộng, chỉ là bị giới hạn theo địa chỉ nguồn.',
      ],
    ],
  },

  {
    id: 1030,
    topic: 'cn-endpoint',
    type: 'yesno_table',
    q: [
      'For each of the following statements about endpoints, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      { p: 'A public endpoint has a public IP address and can be reached from the internet.', o: ['Yes', 'No'], a: 0 },
      { p: 'A private endpoint uses a private IP address from your virtual network.', o: ['Yes', 'No'], a: 0 },
      { p: 'A private endpoint makes the service reachable from anywhere on the internet.', o: ['Yes', 'No'], a: 1 },
    ],
    e: [
      [
        'Public endpoints are internet-facing by definition; private endpoints take an IP from a subnet in your VNet and are reachable only from inside that network or a network connected to it.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về endpoint, chọn Yes nếu phát biểu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Public endpoint có địa chỉ IP công cộng và truy cập được từ Internet.', o: ['Yes', 'No'] },
      { p: 'Private endpoint dùng một địa chỉ IP riêng lấy từ virtual network của bạn.', o: ['Yes', 'No'] },
      { p: 'Private endpoint làm cho dịch vụ truy cập được từ bất cứ đâu trên Internet.', o: ['Yes', 'No'] },
    ],
    ve: [
      [
        'Public endpoint theo định nghĩa là hướng ra Internet; private endpoint lấy một IP từ subnet trong VNet của bạn và chỉ truy cập được từ trong mạng đó hoặc mạng nối với nó.',
      ],
    ],
  },

  {
    id: 1031,
    topic: 'cn-endpoint',
    type: 'single',
    q: ['Which Azure service provides private endpoints for Azure PaaS services?'],
    o: [
      ['Azure Private Link', true],
      ['Azure ExpressRoute', false],
      ['Azure Front Door', false],
      ['Azure DNS', false],
    ],
    e: [
      [
        'Azure Private Link is the service that projects a PaaS resource into your virtual network through a private endpoint.',
        'ExpressRoute connects on-premises networks to Azure; Front Door is a global entry point for web apps; Azure DNS resolves names.',
      ],
    ],
    vq: ['Dịch vụ Azure nào cung cấp private endpoint cho các dịch vụ PaaS của Azure?'],
    vo: ['Azure Private Link', 'Azure ExpressRoute', 'Azure Front Door', 'Azure DNS'],
    ve: [
      [
        'Azure Private Link là dịch vụ đưa một tài nguyên PaaS vào bên trong virtual network của bạn thông qua private endpoint.',
        'ExpressRoute nối mạng tại chỗ với Azure; Front Door là cổng vào toàn cầu cho ứng dụng web; Azure DNS phân giải tên miền.',
      ],
    ],
  },

  {
    id: 1032,
    topic: 'cn-endpoint',
    type: 'yesno',
    q: [
      'Using a private endpoint reduces the exposure of an Azure PaaS service because the service no longer needs to be reachable through its public endpoint.',
    ],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Once a private endpoint is in place you can disable public network access on the resource, so the only path to it is from inside your network. That is the main security reason to use one.',
      ],
    ],
    vq: [
      'Dùng private endpoint giúp giảm mức độ phơi bày của một dịch vụ PaaS trên Azure, vì dịch vụ đó không còn cần truy cập được qua public endpoint nữa.',
    ],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Khi đã có private endpoint, bạn tắt được truy cập mạng công cộng trên tài nguyên, nên đường vào duy nhất là từ bên trong mạng của bạn. Đây chính là lý do bảo mật chính để dùng nó.',
      ],
    ],
  },

  /* ---------------- st-move: công cụ chuyển file ---------------- */
  {
    id: 1033,
    topic: 'st-move',
    type: 'single',
    q: [
      'You need to copy several terabytes of files from an on-premises server to Azure Blob Storage by script, as part of a nightly job.',
      'Which tool should you use?',
    ],
    o: [
      ['AzCopy', true],
      ['Azure Storage Explorer', false],
      ['Azure Data Box', false],
      ['Azure File Sync', false],
    ],
    e: [
      [
        'AzCopy is the command-line tool for copying data to, from and between storage accounts, which makes it the right choice for a scripted nightly job.',
        'Storage Explorer is a graphical application, Data Box is a physical shipping appliance, and File Sync keeps a file server in step with an Azure file share.',
      ],
    ],
    vq: [
      'Bạn cần chép vài terabyte file từ một máy chủ tại chỗ lên Azure Blob Storage bằng script, như một công việc chạy hằng đêm.',
      'Bạn nên dùng công cụ nào?',
    ],
    vo: ['AzCopy', 'Azure Storage Explorer', 'Azure Data Box', 'Azure File Sync'],
    ve: [
      [
        'AzCopy là công cụ dòng lệnh để sao chép dữ liệu lên, xuống và giữa các storage account, nên là lựa chọn đúng cho một công việc chạy tự động hằng đêm.',
        'Storage Explorer là ứng dụng đồ hoạ, Data Box là thiết bị vật lý gửi qua đường bưu kiện, còn File Sync giữ đồng bộ một file server với Azure file share.',
      ],
    ],
  },

  {
    id: 1034,
    topic: 'st-move',
    type: 'single',
    q: [
      'A branch office keeps a Windows file server. You want the most frequently used files to stay on that server for fast local access, while the full set of files lives in Azure Files.',
      'Which tool should you use?',
    ],
    o: [
      ['Azure File Sync', true],
      ['AzCopy', false],
      ['Azure Migrate', false],
      ['Azure Storage Explorer', false],
    ],
    e: [
      [
        'Azure File Sync turns the on-premises Windows file server into a cache of an Azure file share: hot files stay local, cold files are tiered to the cloud.',
        'AzCopy and Storage Explorer are one-off copy tools; Azure Migrate moves servers and databases, not file shares in this sense.',
      ],
    ],
    vq: [
      'Một chi nhánh vẫn giữ một Windows file server. Bạn muốn các file dùng nhiều nhất nằm lại trên máy chủ đó để truy cập nhanh tại chỗ, còn toàn bộ tập file thì nằm trên Azure Files.',
      'Bạn nên dùng công cụ nào?',
    ],
    vo: ['Azure File Sync', 'AzCopy', 'Azure Migrate', 'Azure Storage Explorer'],
    ve: [
      [
        'Azure File Sync biến file server Windows tại chỗ thành bộ nhớ đệm của một Azure file share: file nóng nằm lại tại chỗ, file nguội được đẩy lên cloud.',
        'AzCopy và Storage Explorer là công cụ sao chép một lần; Azure Migrate thì di chuyển máy chủ và cơ sở dữ liệu, không phải file share theo nghĩa này.',
      ],
    ],
  },

  {
    id: 1035,
    topic: 'st-move',
    type: 'single',
    q: [
      'Which tool gives a graphical interface for browsing and managing blobs, file shares, queues and tables in an Azure Storage account from a desktop computer?',
    ],
    o: [
      ['Azure Storage Explorer', true],
      ['AzCopy', false],
      ['Azure Cloud Shell', false],
      ['Azure Data Box', false],
    ],
    e: [
      [
        'Azure Storage Explorer is a free desktop application for Windows, macOS and Linux that browses every storage service in an account. It uses AzCopy for transfers behind the scenes.',
      ],
    ],
    vq: [
      'Công cụ nào cung cấp giao diện đồ hoạ để duyệt và quản lý blob, file share, queue và table trong một Azure Storage account từ máy tính để bàn?',
    ],
    vo: ['Azure Storage Explorer', 'AzCopy', 'Azure Cloud Shell', 'Azure Data Box'],
    ve: [
      [
        'Azure Storage Explorer là ứng dụng máy tính miễn phí cho Windows, macOS và Linux, duyệt được mọi dịch vụ lưu trữ trong một storage account. Bên dưới nó dùng AzCopy để truyền dữ liệu.',
      ],
    ],
  },

  {
    id: 1036,
    topic: 'st-move',
    type: 'yesno',
    q: ['AzCopy can copy data directly from one Azure Storage account to another.'],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'AzCopy supports upload, download and server-to-server copy between storage accounts, so data can move directly without passing through the client machine.',
      ],
    ],
    vq: ['AzCopy có thể sao chép dữ liệu trực tiếp từ một Azure Storage account sang một account khác.'],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'AzCopy hỗ trợ tải lên, tải xuống và sao chép trực tiếp giữa hai storage account, nên dữ liệu đi thẳng mà không phải đi vòng qua máy của người dùng.',
      ],
    ],
  },

  /* ---------------- st-migrate: di chuyển lên Azure ---------------- */
  {
    id: 1037,
    topic: 'st-migrate',
    type: 'single',
    q: [
      'A company must move 300 TB of archive data to Azure. Its internet connection would need several months to upload that volume.',
      'What should the company use?',
    ],
    o: [
      ['Azure Data Box', true],
      ['AzCopy over the existing internet connection', false],
      ['Azure File Sync', false],
      ['A VPN gateway', false],
    ],
    e: [
      [
        'Azure Data Box is a physical appliance Microsoft ships to the customer. The data is copied onto it locally and the device is shipped back, which beats a slow link for very large datasets.',
      ],
    ],
    vq: [
      'Một công ty phải chuyển 300 TB dữ liệu lưu trữ lên Azure. Với đường truyền Internet hiện tại, việc tải lên sẽ mất vài tháng.',
      'Công ty nên dùng gì?',
    ],
    vo: [
      'Azure Data Box',
      'AzCopy qua đường Internet hiện có',
      'Azure File Sync',
      'VPN gateway',
    ],
    ve: [
      [
        'Azure Data Box là thiết bị vật lý Microsoft gửi tới cho khách hàng. Dữ liệu được chép vào đó tại chỗ rồi gửi trả thiết bị, nhanh hơn hẳn so với đường truyền chậm khi khối dữ liệu rất lớn.',
      ],
    ],
  },

  {
    id: 1038,
    topic: 'st-migrate',
    type: 'single',
    q: [
      'Before moving on-premises servers to Azure, a company wants to discover its servers, size the Azure virtual machines it will need and estimate the monthly cost.',
      'Which service should it use?',
    ],
    o: [
      ['Azure Migrate', true],
      ['Azure Arc', false],
      ['Azure Advisor', false],
      ['Azure Monitor', false],
    ],
    e: [
      [
        'Azure Migrate starts with a discovery and assessment phase that inventories servers, recommends VM sizes and estimates the cost of running them in Azure.',
        'Azure Arc manages non-Azure machines, Advisor tunes resources already running, and Monitor collects telemetry.',
      ],
    ],
    vq: [
      'Trước khi chuyển máy chủ tại chỗ lên Azure, một công ty muốn khảo sát các máy chủ, xác định cỡ máy ảo Azure cần dùng và ước tính chi phí hằng tháng.',
      'Công ty nên dùng dịch vụ nào?',
    ],
    vo: ['Azure Migrate', 'Azure Arc', 'Azure Advisor', 'Azure Monitor'],
    ve: [
      [
        'Azure Migrate bắt đầu bằng giai đoạn khảo sát và đánh giá: kiểm kê máy chủ, đề xuất cỡ máy ảo và ước tính chi phí chạy chúng trên Azure.',
        'Azure Arc quản lý máy nằm ngoài Azure, Advisor tinh chỉnh tài nguyên đang chạy, còn Monitor thu thập dữ liệu đo.',
      ],
    ],
  },

  {
    id: 1039,
    topic: 'st-migrate',
    type: 'yesno',
    q: ['Data shipped to Azure on an Azure Data Box device is encrypted while it is on the device.'],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Data Box encrypts the data at rest on the appliance with AES 256-bit encryption, so a lost or intercepted device does not expose the content.',
      ],
    ],
    vq: ['Dữ liệu gửi lên Azure bằng thiết bị Azure Data Box được mã hoá trong lúc nằm trên thiết bị.'],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Data Box mã hoá dữ liệu ở trạng thái nghỉ trên thiết bị bằng AES 256-bit, nên thiết bị bị mất hay bị chặn đường cũng không lộ nội dung.',
      ],
    ],
  },

  /* ---------------- id-external: B2B / B2C ---------------- */
  {
    id: 1040,
    topic: 'id-external',
    type: 'single',
    q: [
      'A company needs to give an external contractor access to one of its Azure resources. The contractor should sign in with their own existing work account rather than a new account created by the company.',
      'Which Microsoft Entra capability should be used?',
    ],
    o: [
      ['Microsoft Entra External ID for business-to-business (B2B) collaboration', true],
      ['Microsoft Entra External ID for customers (B2C)', false],
      ['Microsoft Entra Domain Services', false],
      ['Azure role-based access control alone', false],
    ],
    e: [
      [
        'B2B collaboration invites a partner as a guest user who authenticates with their own organisation’s credentials — no new account and no new password to manage.',
        'B2C is for the consumers of an application you publish, not for partners accessing your resources.',
      ],
    ],
    vq: [
      'Một công ty cần cho một nhà thầu bên ngoài truy cập một tài nguyên Azure của mình. Nhà thầu nên đăng nhập bằng chính tài khoản công việc sẵn có của họ, chứ không phải tài khoản mới do công ty tạo.',
      'Nên dùng khả năng nào của Microsoft Entra?',
    ],
    vo: [
      'Microsoft Entra External ID cho hợp tác business-to-business (B2B)',
      'Microsoft Entra External ID cho khách hàng (B2C)',
      'Microsoft Entra Domain Services',
      'Chỉ dùng Azure role-based access control',
    ],
    ve: [
      [
        'Hợp tác B2B mời đối tác vào với tư cách guest user, xác thực bằng thông tin đăng nhập của chính tổ chức họ — không có tài khoản mới và không có mật khẩu mới phải quản lý.',
        'B2C dành cho người tiêu dùng của ứng dụng do bạn phát hành, không phải cho đối tác truy cập tài nguyên của bạn.',
      ],
    ],
  },

  {
    id: 1041,
    topic: 'id-external',
    type: 'single',
    q: [
      'A retailer publishes a shopping app and wants customers to sign in with a Google or Facebook account, or with a personal email address.',
      'Which solution fits?',
    ],
    o: [
      ['Microsoft Entra External ID for customers (B2C)', true],
      ['Microsoft Entra B2B collaboration', false],
      ['Microsoft Entra Domain Services', false],
      ['Azure AD Connect', false],
    ],
    e: [
      [
        'B2C is the customer identity solution: it lets the people who use your application sign in with social accounts or personal email, with customisable sign-in experiences.',
      ],
    ],
    vq: [
      'Một chuỗi bán lẻ phát hành ứng dụng mua sắm và muốn khách hàng đăng nhập bằng tài khoản Google hoặc Facebook, hoặc bằng email cá nhân.',
      'Giải pháp nào phù hợp?',
    ],
    vo: [
      'Microsoft Entra External ID cho khách hàng (B2C)',
      'Hợp tác B2B của Microsoft Entra',
      'Microsoft Entra Domain Services',
      'Azure AD Connect',
    ],
    ve: [
      [
        'B2C là giải pháp danh tính cho khách hàng: cho phép người dùng ứng dụng của bạn đăng nhập bằng tài khoản mạng xã hội hoặc email cá nhân, với trải nghiệm đăng nhập tuỳ biến được.',
      ],
    ],
  },

  {
    id: 1042,
    topic: 'id-external',
    type: 'yesno',
    q: [
      'A guest user invited through B2B collaboration keeps their credentials in their own organisation’s directory, not in yours.',
    ],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'That is the point of B2B: the guest authenticates against their home tenant, so you never store or reset their password. You only manage what they may access.',
      ],
    ],
    vq: [
      'Một guest user được mời qua hợp tác B2B vẫn giữ thông tin đăng nhập trong thư mục của tổ chức họ, chứ không phải của bạn.',
    ],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Đó chính là điểm mấu chốt của B2B: guest xác thực với tenant gốc của họ, nên bạn không bao giờ phải lưu hay đặt lại mật khẩu cho họ. Bạn chỉ quản việc họ được truy cập cái gì.',
      ],
    ],
  },

  /* ---------------- id-zerotrust: Zero Trust ---------------- */
  {
    id: 1043,
    topic: 'id-zerotrust',
    type: 'multi',
    q: [
      'Which THREE principles form the Zero Trust model?',
      'Each correct answer presents a complete solution.',
    ],
    o: [
      ['Verify explicitly', true],
      ['Use least privilege access', true],
      ['Assume breach', true],
      ['Trust the corporate network by default', false],
    ],
    e: [
      [
        'Zero Trust rests on three principles: verify explicitly, use least privilege access, and assume breach.',
        'Trusting anything by default — including the corporate network — is exactly what Zero Trust rejects.',
      ],
    ],
    vq: [
      'BA nguyên tắc nào tạo nên mô hình Zero Trust?',
      'Mỗi đáp án đúng là một lời giải trọn vẹn.',
    ],
    vo: [
      'Verify explicitly (luôn kiểm chứng tường minh)',
      'Use least privilege access (cấp quyền tối thiểu)',
      'Assume breach (giả định đã bị xâm nhập)',
      'Mặc định tin tưởng mạng nội bộ của công ty',
    ],
    ve: [
      [
        'Zero Trust dựa trên ba nguyên tắc: verify explicitly, use least privilege access và assume breach.',
        'Mặc định tin tưởng bất cứ thứ gì — kể cả mạng nội bộ công ty — chính là điều Zero Trust bác bỏ.',
      ],
    ],
  },

  {
    id: 1044,
    topic: 'id-zerotrust',
    type: 'single',
    q: [
      'Which statement best describes the difference between Zero Trust and the traditional perimeter security model?',
    ],
    o: [
      [
        'Zero Trust verifies every request regardless of where it comes from, instead of trusting anything inside the corporate network',
        true,
      ],
      ['Zero Trust replaces multifactor authentication with passwords', false],
      ['Zero Trust applies only to on-premises networks', false],
      ['Zero Trust removes the need to encrypt data', false],
    ],
    e: [
      [
        'The traditional model treats the corporate network as trusted and defends its perimeter. Zero Trust drops that assumption: every request is authenticated and authorised from all available signals, wherever it originates.',
      ],
    ],
    vq: [
      'Phát biểu nào mô tả đúng nhất khác biệt giữa Zero Trust và mô hình bảo mật vành đai truyền thống?',
    ],
    vo: [
      'Zero Trust kiểm chứng mọi yêu cầu bất kể đến từ đâu, thay vì tin tưởng mọi thứ nằm trong mạng nội bộ công ty',
      'Zero Trust thay xác thực đa yếu tố bằng mật khẩu',
      'Zero Trust chỉ áp dụng cho mạng tại chỗ',
      'Zero Trust bỏ được nhu cầu mã hoá dữ liệu',
    ],
    ve: [
      [
        'Mô hình truyền thống coi mạng nội bộ là đáng tin và phòng thủ ở vành đai. Zero Trust bỏ giả định đó: mọi yêu cầu đều được xác thực và cấp quyền dựa trên toàn bộ tín hiệu có được, bất kể xuất phát từ đâu.',
      ],
    ],
  },

  {
    id: 1045,
    topic: 'id-zerotrust',
    type: 'single',
    q: [
      'An administrator is granted the Contributor role on one resource group for two hours to complete a specific task, instead of permanent Owner rights on the subscription.',
      'Which Zero Trust principle does this illustrate?',
    ],
    o: [
      ['Use least privilege access', true],
      ['Verify explicitly', false],
      ['Assume breach', false],
      ['Defense in depth', false],
    ],
    e: [
      [
        'Least privilege access means granting the minimum rights needed, at the narrowest scope, for the shortest time — exactly what a two-hour scoped assignment does.',
      ],
    ],
    vq: [
      'Một quản trị viên được cấp vai trò Contributor trên đúng một resource group trong hai tiếng để hoàn thành một việc cụ thể, thay vì quyền Owner vĩnh viễn trên cả subscription.',
      'Đây là minh hoạ cho nguyên tắc Zero Trust nào?',
    ],
    vo: [
      'Use least privilege access',
      'Verify explicitly',
      'Assume breach',
      'Defense in depth',
    ],
    ve: [
      [
        'Least privilege access nghĩa là cấp đúng mức quyền tối thiểu cần thiết, ở phạm vi hẹp nhất, trong thời gian ngắn nhất — đúng như việc gán quyền có phạm vi và chỉ kéo dài hai tiếng.',
      ],
    ],
  },

  {
    id: 1046,
    topic: 'id-zerotrust',
    type: 'yesno',
    q: [
      'Under the Zero Trust model, a request coming from inside the corporate network is trusted automatically and does not need to be verified.',
    ],
    subs: [{ p: '', o: ['Yes', 'No'], a: 1 }],
    e: [
      [
        'Zero Trust means never trusting by location. Requests from inside the corporate network are verified exactly like requests from the internet.',
      ],
    ],
    vq: [
      'Theo mô hình Zero Trust, một yêu cầu đến từ bên trong mạng nội bộ công ty được tin tưởng tự động và không cần kiểm chứng.',
    ],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Zero Trust nghĩa là không bao giờ tin tưởng dựa vào vị trí. Yêu cầu từ trong mạng nội bộ vẫn được kiểm chứng y hệt yêu cầu đến từ Internet.',
      ],
    ],
  },

  /* ---------------- id-defense: defense in depth ---------------- */
  {
    id: 1047,
    topic: 'id-defense',
    type: 'single',
    q: ['In the defense-in-depth model, which layer is at the centre and is the ultimate target of an attack?'],
    o: [
      ['Data', true],
      ['Perimeter', false],
      ['Identity and access', false],
      ['Physical security', false],
    ],
    e: [
      [
        'Defense in depth is drawn as concentric rings with data at the centre: physical security, identity and access, perimeter, network, compute, application, and finally data.',
        'Every other layer exists to slow an attacker down before they reach the data.',
      ],
    ],
    vq: ['Trong mô hình defense in depth, lớp nào nằm ở trung tâm và là mục tiêu cuối cùng của một cuộc tấn công?'],
    vo: ['Data', 'Perimeter', 'Identity and access', 'Physical security'],
    ve: [
      [
        'Defense in depth được vẽ thành các vòng tròn đồng tâm với dữ liệu ở giữa: physical security, identity and access, perimeter, network, compute, application, và cuối cùng là data.',
        'Mọi lớp khác tồn tại để làm chậm kẻ tấn công trước khi chúng chạm tới dữ liệu.',
      ],
    ],
  },

  {
    id: 1048,
    topic: 'id-defense',
    type: 'match',
    q: [
      'Match each protection to the defense-in-depth layer it belongs to.',
      'Each layer may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'Azure DDoS Protection stops a volumetric attack before it reaches your network.',
        o: ['Perimeter', 'Identity and access', 'Physical security'],
        a: 0,
      },
      {
        p: 'Multifactor authentication is required before a user can sign in.',
        o: ['Perimeter', 'Identity and access', 'Physical security'],
        a: 1,
      },
      {
        p: 'Biometric checks and security guards control entry to the datacenter building.',
        o: ['Perimeter', 'Identity and access', 'Physical security'],
        a: 2,
      },
    ],
    e: [
      [
        'The perimeter layer filters large-scale attacks arriving from the internet, which is what DDoS Protection does.',
        'The identity and access layer controls who may sign in and what they may reach, so MFA lives there.',
        'Physical security is the outermost layer and covers the building itself.',
      ],
    ],
    vq: [
      'Ghép mỗi biện pháp bảo vệ với lớp defense in depth mà nó thuộc về.',
      'Mỗi lớp có thể dùng một lần, nhiều lần, hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Azure DDoS Protection chặn một đợt tấn công lưu lượng lớn trước khi nó chạm tới mạng của bạn.',
        o: ['Perimeter', 'Identity and access', 'Physical security'],
      },
      {
        p: 'Bắt buộc xác thực đa yếu tố trước khi người dùng đăng nhập được.',
        o: ['Perimeter', 'Identity and access', 'Physical security'],
      },
      {
        p: 'Kiểm tra sinh trắc học và bảo vệ kiểm soát lối vào toà nhà datacenter.',
        o: ['Perimeter', 'Identity and access', 'Physical security'],
      },
    ],
    ve: [
      [
        'Lớp perimeter lọc các cuộc tấn công quy mô lớn đến từ Internet, đúng việc mà DDoS Protection làm.',
        'Lớp identity and access kiểm soát ai được đăng nhập và được chạm tới cái gì, nên MFA nằm ở đây.',
        'Physical security là lớp ngoài cùng và bao gồm chính toà nhà.',
      ],
    ],
  },

  {
    id: 1049,
    topic: 'id-defense',
    type: 'single',
    q: ['What is the purpose of the defense-in-depth model?'],
    o: [
      ['To slow an attack with a series of independent security layers', true],
      ['To replace all other security controls with a single strong firewall', false],
      ['To move all security responsibility to the cloud provider', false],
      ['To encrypt data only while it travels over the network', false],
    ],
    e: [
      [
        'Defense in depth uses several layers so that no single control is the only thing standing between an attacker and the data. If one layer fails, the next one still applies.',
      ],
    ],
    vq: ['Mô hình defense in depth nhằm mục đích gì?'],
    vo: [
      'Làm chậm một cuộc tấn công bằng một loạt lớp bảo mật độc lập nhau',
      'Thay mọi biện pháp bảo mật khác bằng một tường lửa duy nhất thật mạnh',
      'Chuyển toàn bộ trách nhiệm bảo mật sang nhà cung cấp cloud',
      'Chỉ mã hoá dữ liệu trong lúc nó đi trên đường truyền',
    ],
    ve: [
      [
        'Defense in depth dùng nhiều lớp để không một biện pháp đơn lẻ nào là thứ duy nhất chắn giữa kẻ tấn công và dữ liệu. Một lớp thủng thì lớp kế tiếp vẫn còn.',
      ],
    ],
  },

  {
    id: 1050,
    topic: 'id-defense',
    type: 'yesno_table',
    q: [
      'For each of the following statements about defense in depth, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      { p: 'Network segmentation and network security groups belong to the network layer.', o: ['Yes', 'No'], a: 0 },
      { p: 'Keeping virtual machines patched belongs to the compute layer.', o: ['Yes', 'No'], a: 0 },
      { p: 'Defense in depth means using exactly one security control per workload.', o: ['Yes', 'No'], a: 1 },
    ],
    e: [
      [
        'Segmentation and NSGs limit lateral movement, which is the network layer’s job.',
        'Patching and closing unnecessary ports harden the compute layer.',
        'The whole idea is several overlapping controls, not one.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về defense in depth, chọn Yes nếu phát biểu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Phân đoạn mạng và network security group thuộc lớp network.', o: ['Yes', 'No'] },
      { p: 'Giữ cho máy ảo luôn được vá lỗi thuộc lớp compute.', o: ['Yes', 'No'] },
      { p: 'Defense in depth nghĩa là dùng đúng một biện pháp bảo mật cho mỗi khối lượng công việc.', o: ['Yes', 'No'] },
    ],
    ve: [
      [
        'Phân đoạn mạng và NSG hạn chế việc di chuyển ngang, đúng nhiệm vụ của lớp network.',
        'Vá lỗi và đóng các cổng không cần thiết làm cứng lớp compute.',
        'Toàn bộ ý tưởng là nhiều biện pháp chồng lên nhau, chứ không phải một.',
      ],
    ],
  },
];
