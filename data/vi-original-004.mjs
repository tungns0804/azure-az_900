/**
 * Bản dịch tiếng Việt cho câu 166–235 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
const YESNO_TABLE_STEM = ['Với mỗi phát biểu sau, chọn Yes nếu phát biểu đúng, ngược lại chọn No.'];

export default {
  169: {
    q: ['Hoá đơn của bạn dựa trên mức sử dụng tài nguyên Azure và được xuất _____________'],
    o: ['Hằng năm', 'Hằng tháng', 'Hằng ngày'],
  },

  170: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Microsoft Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Cho phép chạy dịch vụ phân tích dữ liệu lớn phục vụ machine learning',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Databricks', 'Azure Logic Apps', 'Azure App Service', 'Azure Application Insights'],
  },

  172: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Microsoft Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Cho phép chạy các ứng dụng nền web',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Databricks', 'Azure Logic Apps', 'Azure App Service', 'Azure Application Insights'],
  },

  174: {
    q: [
      'Một công ty dự định chạy giải pháp trên Microsoft Azure Cloud. Họ cần triển khai',
      'MFA cho các danh tính đặt trên Microsoft Azure.',
      'Chỉ có đúng hai cách xác thực hợp lệ cho MFA như liệt kê dưới đây:',
      'Ảnh chứng minh nhân thân',
      '•',
      'Số hộ chiếu',
      '•',
      'Phát biểu trên đúng hay sai?',
    ],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  175: {
    q: [
      'Một công ty dự định mua gói hỗ trợ của Microsoft Azure.',
      'Dưới đây là một yêu cầu then chốt cho gói hỗ trợ:',
      'Cung cấp phương án liên hệ kỹ sư hỗ trợ của Microsoft qua điện thoại hoặc email trong giờ hành chính.',
      '•',
      'Có khuyến nghị mua gói Basic Support. Khuyến nghị này có đáp ứng được yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  176: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Để triển khai mô hình hybrid cloud, công ty bắt buộc phải có một mạng nội bộ.', o: ['Yes', 'No'] },
      { p: 'Công ty có thể mở rộng tài nguyên tính toán của mạng nội bộ bằng cách dùng hybrid cloud.', o: ['Yes', 'No'] },
      { p: 'Trong mô hình public cloud, chỉ guest user tại công ty bạn mới truy cập được tài nguyên trên đám mây.', o: ['Yes', 'No'] },
    ],
  },

  177: {
    q: ['Khi triển khai một giải pháp Software as a Service (SaaS), bạn chịu trách nhiệm:'],
    o: [
      'cấu hình tính sẵn sàng cao.',
      'định nghĩa quy tắc mở rộng.',
      'cài đặt giải pháp SaaS.',
      'cấu hình chính giải pháp SaaS đó.',
    ],
  },

  179: {
    q: [
      'Bạn dự định chuyển vài máy chủ từ mạng tại chỗ lên Azure. Đâu là lợi thế của',
      'việc dùng dịch vụ public cloud cho các máy chủ đó so với mạng tại chỗ?',
    ],
    o: [
      'Public cloud thuộc sở hữu của công chúng, KHÔNG phải của một tập đoàn tư nhân',
      'Public cloud là giải pháp huy động cộng đồng, cho phép các tập đoàn cùng nâng cấp đám mây',
      'Mọi tài nguyên public cloud đều được mọi người trong công chúng truy cập miễn phí',
      'Public cloud là một thực thể dùng chung, nhiều tập đoàn mỗi bên dùng một phần tài nguyên của đám mây',
    ],
  },

  180: {
    q: [
      'Bạn có 1.000 máy ảo đặt trên các máy chủ Hyper-V trong một data center. Bạn dự định chuyển toàn bộ',
      'máy ảo sang một subscription Azure kiểu pay-as-you-go. Bạn cần xác định mô hình chi phí nào',
      'phù hợp cho giải pháp Azure dự kiến.',
      'Bạn nên chọn mô hình chi phí nào?',
    ],
    o: ['Operational', 'elastic', 'capital', 'scalable'],
  },

  181: {
    q: ['Azure Cosmos DB là ví dụ của loại dịch vụ ________'],
    o: [
      'platform as a service (PaaS)',
      'infrastructure as a service (IaaS)',
      'serverless',
      'software as a service (SaaS)',
    ],
  },

  182: {
    q: [
      'Một cơ sở dữ liệu Microsoft SQL Server đặt trên đám mây và được Azure quản lý việc cập nhật',
      'phần mềm là ví dụ của ________',
    ],
    o: [
      'disaster recovery as a service (DRaaS).',
      'infrastructure as a service (IaaS).',
      'platform as a service (PaaS).',
      'software as a service (SaaS).',
    ],
  },

  183: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ dữ liệu và tài nguyên lên Azure. Kế hoạch chuyển đổi của công ty',
      'nêu rõ chỉ được dùng giải pháp Platform as a Service (PaaS) trên Azure. Bạn cần triển khai một môi trường',
      'Azure đáp ứng kế hoạch chuyển đổi của công ty. Bạn nên tạo gì?',
    ],
    o: [
      'Các máy ảo Azure, Azure SQL database và Azure Storage account.',
      'Một Azure App Service và các máy ảo Azure có cài Microsoft SQL Server.',
      'Một Azure App Service và các Azure SQL database.',
      'Azure storage account và web server chạy trên máy ảo Azure.',
    ],
  },

  185: {
    q: [
      'Bạn được yêu cầu triển khai một giải pháp Trí tuệ nhân tạo (AI) trên Azure.',
      'Bạn muốn bảo đảm có thể xây dựng, kiểm thử và triển khai phân tích dự đoán cho giải pháp đó.',
      'Giải pháp: Bạn nên dùng Azure Machine Learning Studio.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  189: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Giải pháp platform as a service (PaaS) chạy web app trên Azure cho toàn quyền kiểm soát hệ điều hành đang chạy ứng dụng.', o: ['Yes', 'No'] },
      { p: 'Giải pháp platform as a service (PaaS) chạy web app trên Azure cho khả năng tự động mở rộng nền tảng.', o: ['Yes', 'No'] },
      { p: 'Giải pháp platform as a service (PaaS) chạy web app trên Azure cung cấp dịch vụ phát triển chuyên nghiệp để liên tục thêm tính năng cho ứng dụng tự viết.', o: ['Yes', 'No'] },
    ],
  },

  190: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Azure cho phép linh hoạt chuyển đổi giữa chi phí đầu tư (CapEx) và chi phí vận hành (OpEx).', o: ['Yes', 'No'] },
      { p: 'Nếu bạn tạo hai máy ảo Azure cùng cỡ B2S, mỗi máy ảo sẽ luôn phát sinh cùng một mức chi phí hằng tháng.', o: ['Yes', 'No'] },
      { p: 'Khi một máy ảo Azure bị dừng, bạn vẫn tiếp tục trả chi phí lưu trữ gắn với máy ảo đó.', o: ['Yes', 'No'] },
    ],
  },

  191: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Bạn có thể chép một máy ảo từ subscription này sang subscription khác.', o: ['Yes', 'No'] },
      { p: 'Bạn có thể chuyển máy ảo Azure sang một region khác của Azure.', o: ['Yes', 'No'] },
      { p: 'Bạn có thể chuyển một máy ảo từ subscription này sang subscription khác.', o: ['Yes', 'No'] },
    ],
  },

  192: {
    q: ['Sản phẩm Microsoft Intune thuộc loại:'],
    o: [
      'Software as a Service (SaaS)',
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
    ],
  },

  193: {
    q: ['ExpressRoute hoạt động ở tầng nào của mô hình OSI?'],
    o: ['Layer 2', 'Layer 3', 'Layer 5', 'Layer 7'],
  },

  194: {
    q: [
      'Hai lợi ích nào là của điện toán đám mây? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'cho phép cấp phát tài nguyên thật nhanh',
      'làm tăng độ phức tạp trong quản trị',
      'có đúng các tuỳ chọn cấu hình như hệ thống tại chỗ',
      'chuyển chi phí đầu tư (CAPEX) thành chi phí vận hành (OPEX)',
    ],
  },

  195: {
    q: ['Đâu là một tính năng của Azure virtual network?'],
    o: [
      'phân tích chi phí tài nguyên',
      'kiểm tra gói tin (packet inspection)',
      'nhân bản qua nhiều vùng địa lý (geo-redundancy)',
      'cô lập và phân đoạn (isolation and segmentation)',
    ],
    e: [
      ['Isolation'],
      ['Segmentation'],
      ['Chính sách quản trị do'],
      ['Khả năng gom nhóm', 'tổ chức đặt ra.'],
      ['các tài nguyên liên quan là', 'một phần của (hoặc hỗ trợ)', 'hoạt động của khối lượng công việc'],
    ],
  },

  196: {
    q: ['______________ cho phép tài nguyên Azure được triển khai ở gần người dùng.'],
    o: ['Elasticity', 'Geo-distribution', 'High availability', 'Scalability'],
  },

  199: {
    q: [
      'Hạ tầng của công ty bạn gồm nhiều đơn vị kinh doanh, mỗi đơn vị cần rất nhiều',
      'tài nguyên Azure khác nhau cho hoạt động hằng ngày. Tài nguyên mà mỗi đơn vị cần là giống hệt nhau.',
      'Bạn được yêu cầu phê duyệt một chiến lược để tạo tài nguyên Azure một cách tự động.',
      'Giải pháp: Bạn khuyến nghị đưa Azure Resource Manager template vào chiến lược.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  202: {
    q: [
      'Bạn đang chạy một máy ảo trên public cloud theo mô hình IaaS. Mô hình nào phản ánh đúng cách',
      'tài nguyên đó được quản lý?',
    ],
    o: [
      'Mô hình trách nhiệm chung (shared responsibility)',
      'Mô hình quản lý của người dùng đám mây',
      'Mô hình quản lý của người dùng',
    ],
  },

  205: {
    q: [
      'Một công ty muốn chuyển các máy chủ tại chỗ hiện tại lên đám mây bằng Microsoft Azure.',
      'Họ yêu cầu máy chủ vẫn chạy được ngay cả khi một Data Center ngừng hoạt động. Thuật ngữ nào',
      'sau đây chỉ đúng khái niệm cần triển khai để đáp ứng yêu cầu này?',
    ],
    o: ['Fault Tolerance', 'Elasticity', 'Scalability', 'Low Latency'],
  },

  206: {
    q: [
      'Một công ty dự định dựng một subscription kiểu Pay-as-You-Go trên Microsoft Azure.',
      'Công ty đó có được truy cập diễn đàn hỗ trợ (support forum) không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  207: {
    q: [
      'Công ty bạn dự định mua gói hỗ trợ Azure. Chính sách hỗ trợ của công ty nêu rõ môi trường',
      'Azure phải có phương án liên hệ kỹ sư hỗ trợ qua điện thoại hoặc email. Bạn cần',
      'khuyến nghị một gói hỗ trợ đáp ứng yêu cầu của chính sách đó.',
      'Giải pháp: Khuyến nghị gói Professional Direct.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  208: {
    q: [
      'Một công ty dự định dùng Azure App Service để chạy một nhóm ứng dụng web.',
      'Công ty đang dùng service plan bậc Basic.',
      'Microsoft có tự động cung cấp dịch vụ hỗ trợ kỹ thuật chuyên nghiệp kèm gói hỗ trợ Basic không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  210: {
    q: [
      'Công ty bạn có một mạng tại chỗ gồm nhiều máy chủ. Công ty dự định',
      'giảm bớt các trách nhiệm quản trị sau đây của quản trị viên mạng:',
      'Sao lưu dữ liệu ứng dụng',
      '•',
      'Thay thế phần cứng máy chủ bị hỏng',
      '•',
      'Quản lý an ninh vật lý của máy chủ',
      '•',
      'Cập nhật hệ điều hành máy chủ',
      '•',
      'Quản lý quyền truy cập tài liệu dùng chung',
      '•',
      'Công ty dự định chuyển vài máy chủ sang máy ảo Azure.',
      '•',
      'Bạn cần xác định những trách nhiệm quản trị nào sẽ được loại bỏ sau khi chuyển đổi.',
      'Bạn nên chọn hai trách nhiệm nào?',
    ],
    o: [
      'Thay thế phần cứng máy chủ bị hỏng',
      'Sao lưu dữ liệu ứng dụng',
      'Quản lý an ninh vật lý của máy chủ',
      'Cập nhật hệ điều hành máy chủ',
      'Quản lý quyền truy cập tài liệu dùng chung',
    ],
  },

  211: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Để đạt mô hình hybrid cloud, công ty luôn phải chuyển đổi từ mô hình private cloud.', o: ['Yes', 'No'] },
      { p: 'Công ty có thể mở rộng năng lực của mạng nội bộ bằng cách dùng public cloud.', o: ['Yes', 'No'] },
      { p: 'Trong mô hình public cloud, chỉ guest user tại công ty bạn mới truy cập được tài nguyên trên đám mây.', o: ['Yes', 'No'] },
    ],
  },

  212: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Với software as a service (SaaS), bạn phải tự cài các bản cập nhật phần mềm.', o: ['Yes', 'No'] },
      { p: 'Với infrastructure as a service (IaaS), bạn phải tự cài phần mềm mà mình muốn dùng.', o: ['Yes', 'No'] },
      { p: 'Azure Backup là ví dụ của platform as a service (PaaS).', o: ['Yes', 'No'] },
    ],
  },

  213: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Bạn có thể tạo một resource group bên trong một resource group khác.', o: ['Yes', 'No'] },
      { p: 'Một máy ảo Azure có thể nằm trong nhiều resource group.', o: ['Yes', 'No'] },
      { p: 'Một resource group có thể chứa tài nguyên từ nhiều region khác nhau của Azure.', o: ['Yes', 'No'] },
    ],
  },

  216: {
    q: [
      'Bạn được giao triển khai một ứng dụng LOB quan trọng lên Azure, ứng dụng này sẽ cài trên một máy ảo.',
      'Bạn được cho biết chiến lược triển khai ứng dụng phải bảo đảm mức sẵn sàng 99,99 phần trăm.',
      'Bạn cần bảo đảm chiến lược dùng càng ít máy ảo và availability zone càng tốt.',
      'Giải pháp: Bạn dùng hai máy ảo và một availability zone.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  217: {
    q: [
      'Bạn được giao triển khai một ứng dụng LOB quan trọng lên Azure, ứng dụng này sẽ cài trên một máy ảo.',
      'Bạn được cho biết chiến lược triển khai ứng dụng phải bảo đảm mức sẵn sàng 99,99 phần trăm.',
      'Bạn cần bảo đảm chiến lược dùng càng ít máy ảo và availability zone càng tốt.',
      'Giải pháp: Bạn dùng một máy ảo và hai availability zone.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  218: {
    q: [
      'Bạn được giao triển khai một ứng dụng LOB quan trọng lên Azure, ứng dụng này sẽ cài trên một máy ảo.',
      'Bạn được cho biết chiến lược triển khai ứng dụng phải bảo đảm mức sẵn sàng 99,99 phần trăm.',
      'Bạn cần bảo đảm chiến lược dùng càng ít máy ảo và availability zone càng tốt.',
      'Giải pháp: Bạn dùng hai máy ảo và hai availability zone.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  219: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần bảo đảm các dịch vụ chạy trên',
      'những máy ảo đó vẫn sẵn sàng nếu một data center gặp sự cố.',
      'Giải pháp: Bạn triển khai các máy ảo vào hai resource group trở lên.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  220: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần bảo đảm các dịch vụ chạy trên',
      'những máy ảo đó vẫn sẵn sàng nếu một data center gặp sự cố.',
      'Giải pháp: Bạn triển khai các máy ảo vào một scale set.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  221: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần bảo đảm các dịch vụ chạy trên',
      'những máy ảo đó vẫn sẵn sàng nếu một data center gặp sự cố.',
      'Giải pháp: Bạn triển khai các máy ảo vào hai scale set trở lên.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  222: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần bảo đảm các dịch vụ chạy trên',
      'những máy ảo đó vẫn sẵn sàng nếu một data center gặp sự cố.',
      'Giải pháp: Bạn triển khai các máy ảo vào hai availability zone trở lên.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  223: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần bảo đảm các dịch vụ chạy trên',
      'những máy ảo đó vẫn sẵn sàng nếu một data center gặp sự cố.',
      'Giải pháp: Bạn triển khai các máy ảo vào hai region trở lên.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  224: {
    q: YESNO_TABLE_STEM,
    s: [
      { p: 'Mọi tài nguyên Azure triển khai vào cùng một resource group đều phải dùng chung một region của Azure.', o: ['Yes', 'No'] },
      { p: 'Nếu bạn gắn một tag cho resource group, mọi tài nguyên Azure trong resource group đó cũng được gắn tag ấy.', o: ['Yes', 'No'] },
      { p: 'Nếu bạn đặt quyền cho một resource group, mọi tài nguyên Azure trong resource group đó đều kế thừa quyền ấy.', o: ['Yes', 'No'] },
    ],
  },

  225: {
    q: [
      'Bạn dự định triển khai một giải pháp cơ sở dữ liệu trên Azure. Bạn cần một giải pháp',
      'đáp ứng các yêu cầu sau:',
      'Có thể nhận dữ liệu đồng thời từ nhiều region',
      '•',
      'Có thể lưu tài liệu JSON',
      '•',
      'Bạn nên triển khai dịch vụ cơ sở dữ liệu nào?',
    ],
    o: [
      'Azure Cosmos DB',
      'Azure SQL',
      'Azure Database for MySQL servers',
      'Azure Database for PostgreSQL servers',
      'SQL elastic pools',
      'SQL Server stretch databases',
    ],
  },

  227: {
    q: [
      'Một công ty đã tạo một Resource Group (RG) như hình dưới. Họ muốn bảo đảm các tài nguyên',
      'trong Resource Group (RG) đó không bị xoá nhầm. Bạn sẽ dùng thứ nào sau đây cho mục đích',
      'này?',
    ],
    o: ['Access Control', 'Policies', 'Locks', 'Diagnostics settings'],
  },

  228: {
    q: ['Ở những gói hỗ trợ Azure nào bạn mở được yêu cầu hỗ trợ mới?'],
    o: [
      'Chỉ Premier và Professional Direct',
      'Chỉ Premier, Professional Direct và Standard',
      'Chỉ Premier, Professional Direct, Standard và Developer',
      'Professional Direct, Standard, Developer và Basic',
    ],
  },

  229: {
    q: [
      'Bạn dự định dùng phương thức Workspace.from_config() để kết nối tới Azure Machine Learning',
      'workspace từ môi trường Python trên máy trạm của mình. Bạn đã dùng pip cài gói',
      'azureml-sdk. Bạn còn phải làm gì nữa?',
    ],
    o: [
      'Chạy pip install azureml-sdk[\'notebooks\'] để cài phần mở rộng notebooks.',
      'Tải file config.json của workspace về đúng thư mục chứa các file mã Python trên máy bạn.',
      'Tạo một compute target kiểu Compute Instance trong workspace.',
    ],
  },

  230: {
    q: [
      'Một công ty muốn mua gói hỗ trợ của Microsoft Azure. Dưới đây là một yêu cầu then chốt cho',
      'gói hỗ trợ:',
      'Được Microsoft đánh giá kiến trúc định kỳ cho môi trường Azure',
      'Công ty cần mua gói nào sau đây để đáp ứng yêu cầu này?',
    ],
    o: ['Basic', 'Developer', 'Professional Direct', 'Standard'],
  },

  231: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Gói hỗ trợ cung cấp thông tin về thông lệ tốt, tình trạng sức khoẻ và thông báo, cùng quyền truy cập',
      'thông tin thanh toán 24/7 với chi phí thấp nhất có thể là gói Standard.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Developer', 'Basic', 'Premier'],
  },

  233: {
    q: [
      'Một công ty dự định dựng nhiều tài nguyên trong subscription Microsoft Azure của họ. Họ muốn',
      'gắn tag cho tài nguyên trên Microsoft Azure. Nhưng họ muốn bảo đảm rằng khi resource group',
      'được tạo, chúng bắt buộc phải có một tag tên “organization” với giá trị “montana”.',
      'Bạn khuyến nghị dùng Azure Key Vault để đáp ứng yêu cầu này.',
      'Khuyến nghị này có đáp ứng được yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  234: {
    q: [
      'Một công ty dự định dựng nhiều tài nguyên trong subscription Microsoft Azure của họ. Họ muốn',
      'gắn tag cho tài nguyên trên Microsoft Azure. Nhưng họ muốn bảo đảm rằng khi resource group',
      'được tạo, chúng bắt buộc phải có một tag tên “organization” với giá trị “montana”.',
      'Giải pháp: Bạn khuyến nghị dùng Azure lock để đáp ứng yêu cầu này.',
      'Khuyến nghị này có đáp ứng được yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  235: {
    q: [
      'Một công ty dự định dựng nhiều tài nguyên trong subscription Microsoft Azure của họ. Họ muốn',
      'gắn tag cho tài nguyên trên Microsoft Azure. Nhưng họ muốn bảo đảm rằng khi resource group',
      'được tạo, chúng bắt buộc phải có một tag tên “organization” với giá trị “montana”.',
      'Giải pháp: Bạn khuyến nghị dùng Azure Policy để đáp ứng yêu cầu này.',
      'Khuyến nghị này có đáp ứng được yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },
};
