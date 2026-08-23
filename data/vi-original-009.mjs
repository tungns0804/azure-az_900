/**
 * Bản dịch tiếng Việt cho câu 501–570 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  501: {
    q: [
      'Bạn đang xây dựng một ứng dụng trên một máy ảo Azure. Theo yêu cầu bảo mật, cần',
      'áp dụng Azure Multi-Factor Authentication (MFA) dựa trên một số điều kiện nhất định.',
      'Bạn nên chọn dịch vụ Azure nào?',
    ],
    o: [
      'Azure Monitor',
      'Azure Advanced Threat Protection (ATP)',
      'Azure Active Directory ID Protection',
      'Azure Security Center',
    ],
    e: [
      [
        'Azure Active Directory ID Protection cho phép bạn áp dụng MFA kèm theo',
        'điều kiện. Nó cũng dùng để phát hiện rủi ro như đăng nhập từ địa chỉ IP ẩn danh,',
        'đăng nhập bất thường và rò rỉ thông tin đăng nhập.',
      ],
    ],
  },

  502: {
    q: [
      'Công ty bạn có các máy ảo (VM) đặt trên Microsoft Azure. Các máy ảo nằm trong',
      'một Azure virtual network duy nhất tên VNet1. Công ty có những người làm việc từ xa. Những người này',
      'cần truy cập các máy ảo trên VNet1. Bạn cần cấp quyền truy cập cho họ.',
    ],
    o: [
      'Cấu hình một VPN Site-to-Site (S2S).',
      'Cấu hình một VPN VNet-to-VNet.',
      'Cấu hình một VPN Point-to-Site (P2S).',
      'Cấu hình DirectAccess trên một máy ảo chạy Windows Server 2012.',
      'Cấu hình một Multi-Site VPN.',
    ],
    e: [
      [
        'Kết nối qua Point-to-Site (P2S) VPN gateway cho phép bạn tạo một kết nối an toàn',
        'tới virtual network từ một máy khách đơn lẻ.',
        'P2S VPN cũng là giải pháp hữu ích thay cho S2S VPN khi bạn',
        'chỉ có vài máy khách cần kết nối tới một VNet.',
      ],
    ],
  },

  503: {
    q: [
      'Thứ nào sau đây cung cấp một nền tảng lệnh để triển khai đối tượng lên hạ tầng đám mây',
      'và giữ tính nhất quán trên toàn môi trường Azure của bạn?',
    ],
    o: ['Azure Policy', 'Resource group', 'Azure Resource Manager', 'Management group'],
    e: [
      [
        'Azure Resource Manager là dịch vụ cung cấp một lớp quản lý',
        'cho phép bạn tạo, cập nhật và xoá tài nguyên Azure, đồng thời',
        'giữ tính nhất quán trên toàn môi trường Azure.',
      ],
    ],
  },

  504: {
    q: [
      'Công ty bạn dự định chuyển từ môi trường tại chỗ lên Azure và bạn quyết định',
      'phát triển ứng dụng dùng Docker làm môi trường phát triển.',
      'Dịch vụ nào sau đây phù hợp nhất với tình huống này?',
    ],
    o: ['Azure App Services', 'Azure Container Instances', 'Azure Functions', 'Máy ảo Azure'],
    e: [
      [
        'Azure Container Instances là dịch vụ chạy container Docker theo yêu cầu',
        'trong môi trường Azure của bạn. Nó chạy được trong một container',
        'riêng biệt mà không cần orchestration, chạy được ứng dụng hướng sự kiện,',
        'triển khai nhanh từ pipeline phát triển container,',
        'và chạy được các tác vụ xử lý dữ liệu cùng build.',
      ],
    ],
  },

  505: {
    q: ['Phát biểu nào mô tả chính xác Modern Lifecycle Policy cho các dịch vụ Azure?'],
    o: [
      'Microsoft hỗ trợ chính thức cho một dịch vụ trong năm năm.',
      'Microsoft báo trước tối thiểu 12 tháng trước khi ngừng hỗ trợ một dịch vụ.',
      'Sau khi một dịch vụ ra general availability, Microsoft hỗ trợ dịch vụ đó tối thiểu bốn năm.',
      'Khi một dịch vụ ngừng hoạt động, bạn mua được gói hỗ trợ mở rộng cho dịch vụ đó tối đa năm năm.',
    ],
  },

  506: {
    q: ['Azure Site Recovery cung cấp fault tolerance cho máy ảo.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Site Recovery là dịch vụ khôi phục sau thảm hoạ gốc của Azure (DRaaS).']],
  },

  507: {
    q: [
      'Lập trình viên của bạn đã tạo một web app dạng cổng thông tin cho người dùng ở chi nhánh Miami. Web app này',
      'sẽ truy cập được công khai và được người dùng ở Miami dùng để tra thông tin khách hàng cùng sản phẩm.',
      'Web app hiện đang chạy trong môi trường kiểm thử tại chỗ.',
      'Bạn dự định đưa web app lên Azure.',
      'Bạn cần xác định gói web tier nào của Azure để chạy web app đó. Gói web tier phải đáp ứng',
      'các yêu cầu sau:',
      'Gói STANDARD bao gồm',
      'Website sẽ dùng URL miami.weyland.com.',
      '•',
      'Website sẽ được triển khai trên hai instance.',
      '• custom domain',
      '•',
      'Phải có hỗ trợ SSL.',
      '•',
      '• tối đa 3 instance',
      'Website cần 12 GB dung lượng lưu trữ.',
      '•',
      '• hỗ trợ SSL',
      'Chi phí phải thấp nhất có thể.',
      '•',
      '• tối đa 50 GB lưu trữ',
      'Bạn nên dùng gói web tier nào?',
    ],
    o: ['Standard', 'Basic', 'Free', 'Shared'],
  },

  508: {
    q: [
      'Lập trình viên của bạn đã tạo 10 ứng dụng web cần đưa lên Azure.',
      'Bạn cần xác định gói web tier nào của Azure để chạy các ứng dụng đó. Gói web tier phải đáp ứng',
      'các yêu cầu sau:',
      '- Các web app sẽ dùng custom domain.',
      '- Mỗi web app cần 10 GB dung lượng lưu trữ.',
      '- Mỗi web app phải chạy trên compute instance riêng.',
      '- Phải có cân bằng tải giữa các instance.',
      '- Chi phí phải thấp nhất có thể.',
      'Bạn nên dùng gói web tier nào?',
    ],
    o: ['Standard', 'Premium', 'Basic', 'Free', 'Shared'],
  },

  509: {
    q: [
      'Bạn được yêu cầu triển khai một giải pháp Trí tuệ nhân tạo (AI) trên Azure. Bạn muốn bảo đảm',
      'có thể xây dựng, kiểm thử và triển khai phân tích dự đoán cho giải pháp đó.',
      'Giải pháp: Bạn nên dùng Azure Cosmos DB.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Cosmos DB là cơ sở dữ liệu NoSQL có quản lý hoàn toàn, dành cho việc phát triển ứng dụng',
        'hiện đại. Thời gian phản hồi ở mức mili-giây một chữ số, cùng khả năng mở rộng tự động',
        'và tức thì, bảo đảm tốc độ ở mọi quy mô.',
      ],
    ],
  },

  511: {
    q: [
      'Rừng Active Directory của công ty bạn có hàng nghìn tài khoản người dùng. Bạn được',
      'thông báo rằng toàn bộ tài nguyên mạng sẽ được chuyển lên Azure. Sau đó data center tại chỗ sẽ',
      'ngừng hoạt động.',
      'Bạn phải áp dụng một chiến lược giảm thiểu ảnh hưởng tới người dùng sau khi việc chuyển đổi',
      'hoàn tất.',
      'Giải pháp: Bạn dự định đồng bộ toàn bộ tài khoản người dùng Active Directory lên Azure Active Directory (Azure AD).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Đồng bộ AD tại chỗ với Azure AD để giảm thiểu tác động tới người dùng.']],
  },

  513: {
    q: ['Giai đoạn đầu tiên trong Microsoft Cloud Adoption Framework for Azure là gì?'],
    o: [
      'Áp dụng đám mây (Adopt).',
      'Lập kế hoạch (Plan).',
      'Chuẩn bị tổ chức (Ready).',
      'Xác định chiến lược (Strategy).',
    ],
  },

  514: {
    q: ['Bạn triển khai máy chủ vật lý được vào những mô hình đám mây nào?'],
    o: [
      'public cloud',
      'private cloud, hybrid cloud và public cloud',
      'chỉ hybrid cloud',
      'private cloud và hybrid cloud',
    ],
  },

  515: {
    q: [
      'Nhóm của bạn cần một công cụ xử lý dữ liệu từ hàng triệu cảm biến. Dịch vụ nào sau đây',
      'dùng được cho mục đích này?',
    ],
    o: ['Azure Machine Learning.', 'Azure IoT Hub.', 'Azure AI bot.', 'Azure Functions.'],
  },

  516: {
    q: [
      'Nhóm của bạn cần một công cụ để tương quan các sự kiện từ nhiều tài nguyên về một kho',
      'trung tâm. Thứ nào sau đây dùng được cho mục đích này?',
    ],
    o: ['Azure Event Hubs.', 'Azure Security Center.', 'Azure AD.', 'Azure Log Analytics.'],
  },

  517: {
    q: [
      'Giải pháp Platform as a Service (PaaS) cho toàn quyền kiểm soát hệ điều hành đang chạy',
      'ứng dụng.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Giải pháp PaaS không cho truy cập vào hệ điều hành. Dịch vụ Azure Web',
        'Apps cung cấp một môi trường để bạn chạy ứng dụng web của mình.',
        'Bên dưới, các web app chạy trên máy ảo cài IIS.',
        'Tuy nhiên bạn không có quyền truy cập trực tiếp vào máy ảo, hệ điều hành',
        'hay IIS.',
      ],
    ],
  },

  518: {
    q: [
      'Giải pháp Platform as a Service (PaaS) cấp thêm bộ nhớ cho ứng dụng bằng cách đổi bậc',
      'giá.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  519: {
    q: [
      'Một giải pháp chạy web app trên Azure có thể được cấp thêm bộ nhớ bằng cách đổi',
      'bậc giá.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  520: {
    q: ['Giải pháp Platform as a Service (PaaS) có thể tự động mở rộng số lượng instance.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  522: {
    q: [
      'SLA là thoả thuận chính thức giữa Microsoft và khách hàng. Thoả thuận SLA nêu rõ',
      'khía cạnh nào sau đây?',
    ],
    o: ['Scalability', 'Elasticity', 'Fault Tolerance', 'Availability'],
  },

  523: {
    q: [
      'Bạn có một ứng dụng Azure dùng các dịch vụ trong bảng sau.',
      'Dịch vụ',
      'Service Level Agreement (SLA)',
      'Azure Virtual Machine',
      '99,9%',
      'Azure SQL Database',
      '99,99%',
      'Bạn tính composite SLA cho ứng dụng này như thế nào?',
    ],
    o: [
      '0,999 / 0,9999 = 0,9991 = 99,91%',
      'Max(0,999; 0,9999) = 0,9999 = 99,99%',
      '0,999 × 0,9999 = 0,9989001 = 99,89001%',
      'Min(0,999; 0,9999) = 0,999 = 99,9%',
    ],
    e: [['Cách tính gọn: 99,9 × 99,99 = 9 989,001']],
  },

  524: {
    q: ['Thêm dịch vụ phụ thuộc vào ứng dụng sẽ cải thiện composite SLA.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  525: {
    q: ['Thêm dịch vụ dự phòng vào ứng dụng sẽ cải thiện composite SLA.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  526: {
    q: ['Cách cấu hình dịch vụ có thể ảnh hưởng tới SLA mà Microsoft cung cấp.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Nhiều dịch vụ cho phép cấu hình thêm các tuỳ chọn như Availability Zone cho',
        'máy ảo Azure, và điều đó làm tăng SLA.',
      ],
    ],
  },

  527: {
    q: ['SLA của Azure Maps về thời gian hoạt động được bảo đảm là bao nhiêu?'],
    o: ['99 phần trăm', '99,9 phần trăm', '99,99 phần trăm'],
  },

  528: {
    q: ['Dịch vụ Azure đang ở public preview cũng chịu ràng buộc bởi Service Level Agreement (SLA).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Public preview không nằm trong phạm vi SLA, và trong một số trường hợp còn không được hỗ trợ.']],
  },

  529: {
    q: [
      'Công ty có thể tăng thời gian hoạt động được bảo đảm trong Service Level Agreement (SLA) bằng cách đặt tài nguyên',
      'Azure ở nhiều region.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Thời gian hoạt động được bảo đảm trong SLA sẽ tăng (thường lên 99,95 phần trăm) khi tài nguyên',
        'được triển khai qua nhiều region.',
      ],
    ],
  },

  530: {
    q: [
      'Thời gian hoạt động được bảo đảm trong Service Level Agreement (SLA) cho các dịch vụ Azure có phí là ít nhất 99,9',
      'phần trăm.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'SLA khác nhau tuỳ theo loại tài nguyên và cách phân bố vị trí của tài nguyên',
        'đó. Tuy nhiên, mức thời gian hoạt động tối thiểu cho mọi dịch vụ Azure là 99,9 phần trăm.',
      ],
    ],
  },

  531: {
    q: [
      'Công ty có thể tăng thời gian hoạt động được bảo đảm trong Service Level Agreement (SLA) bằng cách mua',
      'nhiều subscription.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Số lượng subscription không liên quan gì tới SLA về thời gian hoạt động.']],
  },

  532: {
    q: [
      'Thêm một máy ảo thứ ba làm giảm composite SLA. Công ty làm cách nào để bù lại mức',
      'giảm đó?',
    ],
    o: [
      'Tăng cỡ của từng máy ảo.',
      'Triển khai thêm instance của cùng những máy ảo đó qua các availability zone khác nhau trong cùng một region Azure.',
      'Không cần làm gì. Dùng Azure Load Balancer sẽ làm tăng SLA cho máy ảo.',
    ],
    e: [
      [
        'Nếu một availability zone bị ảnh hưởng, instance máy ảo của bạn ở availability zone',
        'còn lại sẽ không bị ảnh hưởng.',
      ],
    ],
  },

  533: {
    q: ['Gói hỗ trợ Standard được kèm sẵn trong tài khoản Azure miễn phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Tài khoản Azure miễn phí đi kèm gói hỗ trợ “Basic”, không phải gói hỗ trợ',
        '“Standard”.',
      ],
    ],
  },

  534: {
    q: ['Service Level Agreement (SLA) nào áp dụng cho dịch vụ Azure đang ở public preview?'],
    o: [
      'Mỗi dịch vụ tự định nghĩa SLA của riêng mình',
      'SLA sẽ là 99%',
      'SLA sẽ thấp hơn SLA lúc general availability (GA) 1%',
      'SLA sẽ là 99,95%',
    ],
  },

  535: {
    q: [
      'Gói hỗ trợ Premier chỉ được bán cho công ty có Enterprise Agreement',
      '(EA).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn mua được các gói Professional Direct, Standard và Developer',
        'kèm Microsoft Customer Agreement. Bạn cũng mua được gói Professional',
        'và Standard kèm Enterprise Agreement.',
      ],
    ],
  },

  536: {
    q: ['Mọi dịch vụ Azure đang ở private preview đều phải truy cập bằng một Azure portal riêng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dịch vụ ở private preview xem được ngay trong Azure portal thông thường. Tuy nhiên,',
        'bạn phải được đăng ký vào tính năng đang ở private preview thì mới xem được nó.',
        'Việc truy cập tính năng private preview thường chỉ theo lời mời.',
      ],
    ],
  },

  537: {
    q: ['Dịch vụ Azure đang ở public preview dùng được cho môi trường chạy thật.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn có thể dùng dịch vụ ở public preview trong môi trường chạy thật. Tuy nhiên bạn',
        'nên biết rằng dịch vụ có thể còn lỗi, không nằm trong phạm vi SLA và có thể',
        'bị rút lại mà không báo trước.',
      ],
    ],
  },

  538: {
    q: ['Nếu công ty bạn dùng tài khoản Azure miễn phí, bạn chỉ dùng được một phần các dịch vụ Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Free Account cho bạn 12 tháng truy cập các dịch vụ miễn phí phổ biến nhất.',
        'Nó cũng cho bạn một khoản credit (200 USD) dùng cho bất kỳ dịch vụ Azure nào trong tối đa 30 ngày.',
      ],
    ],
  },

  539: {
    q: ['Bạn có thể tạo tới 10 tài khoản Azure miễn phí bằng cùng một tài khoản Microsoft.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Mỗi tài khoản Microsoft chỉ tạo được đúng một tài khoản Azure miễn phí.']],
  },

  540: {
    q: ['Mọi tài khoản Azure miễn phí đều hết hạn sau một khoảng thời gian nhất định.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Mọi tài khoản miễn phí đều hết hạn sau 12 tháng.']],
  },

  541: {
    q: [
      'Dịch vụ Azure nào sau đây cung cấp bộ công cụ để giám sát, phân bổ và tối ưu',
      'chi phí Azure của bạn?',
    ],
    o: ['Azure Cost Management', 'Azure Pricing Calculator', 'Total Cost of Ownership Calculator'],
  },

  542: {
    q: ['Azure Cost Management là dịch vụ có tính phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  543: {
    q: ['Chọn các tính năng chính của Azure Cost Management.'],
    o: [
      'Giảm chi phí',
      'Thông tin chi phí và thanh toán',
      'Ngân sách (Budget)',
      'Phân bổ chi phí theo tài nguyên',
      'Cảnh báo',
      'Xuất dữ liệu tự động',
      'Chiết khấu',
      'Khuyến nghị về chi phí',
    ],
  },

  544: {
    q: [
      'Dịch vụ Azure nào sau đây cho phép khách hàng so sánh chi phí khối lượng công việc tại chỗ',
      'với chính khối lượng công việc đó khi chạy trên nền tảng Azure?',
    ],
    o: ['Azure Cost Management', 'Azure Pricing Calculator', 'Total Cost of Ownership Calculator'],
  },

  545: {
    q: [
      'Azure Pricing Calculator cho phép khách hàng xem lại và ước tính chi phí vận hành các dịch vụ',
      'Azure trước khi quyết định mua.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  549: {
    q: ['Bạn thực hiện được tác vụ nào bằng Azure Advisor?'],
    o: [
      'Tích hợp Active Directory với Azure Active Directory (Azure AD).',
      'Ước tính chi phí của một giải pháp Azure.',
      'Xác nhận rằng bảo mật của subscription Azure tuân theo thông lệ tốt.',
      'Đánh giá tài nguyên tại chỗ nào có thể chuyển lên Azure.',
    ],
  },

  550: {
    q: [
      'Công ty bạn có 10 văn phòng. Bạn dự định tạo vài báo cáo thanh toán từ Azure portal.',
      'Mỗi báo cáo sẽ chứa mức sử dụng tài nguyên Azure của từng văn phòng.',
      'Bạn nên dùng tính năng nào của Azure Resource Manager trước khi tạo báo cáo?',
    ],
    o: ['tag', 'template', 'lock', 'policy'],
    e: [
      [
        'Bạn dùng resource tag để “gắn nhãn” cho tài nguyên Azure. Tag là phần siêu dữ liệu',
        'gắn vào tài nguyên. Khi mọi tài nguyên Azure đều được gắn tag, bạn tạo được',
        'báo cáo liệt kê toàn bộ tài nguyên theo giá trị của tag.',
      ],
    ],
  },

  551: {
    q: [
      'Bạn triển khai một tài nguyên Azure. Tài nguyên đó ngừng phục vụ trong thời gian dài do một',
      'sự cố dịch vụ. Microsoft sẽ __________?',
    ],
    o: [
      'hoàn tiền vào tài khoản ngân hàng của bạn.',
      'chuyển tài nguyên sang một subscription khác.',
      'ghi có (credit) vào tài khoản Azure của bạn.',
      'gửi bạn một mã giảm giá đổi được thành Azure credit.',
    ],
    e: [
      [
        'Nếu SLA của một dịch vụ Azure không được đáp ứng, bạn nhận được credit.',
        'Credit này được trừ vào hoá đơn hằng tháng cho dịch vụ đó.',
      ],
    ],
  },

  552: {
    q: [
      'Nhóm của bạn cần một công cụ cung cấp trợ lý số trực tuyến hỗ trợ giọng nói. Dịch vụ nào sau',
      'đây dùng được cho mục đích này?',
    ],
    o: ['Azure Machine Learning', 'Azure IoT Hub', 'Azure AI bot', 'Azure Functions'],
  },

  553: {
    q: ['Một tài khoản Microsoft duy nhất có thể quản lý nhiều subscription Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Bạn dùng được cùng một tài khoản để quản lý nhiều subscription.']],
  },

  554: {
    q: ['Một công ty có thể lưu tài nguyên trong nhiều subscription.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Một công ty có thể có nhiều subscription và lưu tài nguyên trong các subscription',
        'khác nhau. Tuy nhiên, một instance tài nguyên chỉ tồn tại trong đúng một subscription.',
      ],
    ],
  },

  555: {
    q: ['Hai subscription Azure có thể được gộp thành một subscription duy nhất bằng cách tạo một yêu cầu hỗ trợ.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn không gộp được hai subscription thành một. Tuy nhiên bạn có thể',
        'chuyển một số tài nguyên Azure từ subscription này sang subscription khác. Bạn cũng có thể',
        'chuyển quyền sở hữu một subscription và đổi kiểu thanh toán của subscription.',
      ],
    ],
  },

  556: {
    q: ['Mỗi subscription Azure có thể có nhiều account administrator.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn gán được service administrator và co-administrator trong Azure Portal',
        'nhưng chỉ có đúng một account administrator.',
      ],
    ],
  },

  557: {
    q: ['Mỗi subscription Azure chỉ quản lý được bằng một tài khoản Microsoft.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn cần một tài khoản Azure Active Directory để quản lý subscription, không phải một',
        'tài khoản Microsoft.',
        'Một tài khoản được tạo trong Azure Active Directory khi bạn tạo',
        'subscription. Bạn tạo thêm được các tài khoản khác trong Azure Active Directory để',
        'quản lý subscription.',
      ],
    ],
  },

  558: {
    q: ['Một Azure resource group chứa nhiều subscription Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Resource group là hộp chứa logic cho tài nguyên Azure. Tuy nhiên, resource',
        'group không chứa subscription. Ngược lại, subscription mới chứa resource group.',
      ],
    ],
  },

  559: {
    q: [
      'Nhóm của bạn cần một công cụ dùng dữ liệu huấn luyện trong quá khứ để đưa ra dự đoán với xác suất',
      'rất cao. Dịch vụ nào sau đây dùng được cho mục đích này?',
    ],
    o: ['Azure Machine Learning.', 'Azure IoT Hub.', 'Azure AI bot.', 'Azure Functions.'],
  },

  560: {
    q: [
      'Nếu bạn dự định chạy ứng dụng web trên giải pháp platform as a service của Azure là Azure Web Apps,',
      'thì nền tảng đó có khả năng tự động mở rộng không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  562: {
    q: [
      'Bạn có một workspace Azure Sentinel. Bạn cần tự động hoá phản ứng với các mối đe doạ do',
      'Azure Sentinel phát hiện. Bạn nên dùng gì?',
    ],
    o: [
      'Adaptive network hardening trong Azure Security Center',
      'Azure Service Health',
      'Azure Monitor workbook',
      'Adaptive application controls trong Azure Security Center',
    ],
  },

  563: {
    q: ['Azure Sentinel lưu các sự kiện thu thập được vào một Azure storage account.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  564: {
    q: ['Azure Sentinel có thể tự động khắc phục sự cố (remediate incident).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  565: {
    q: ['Azure Sentinel có thể thu thập log của Windows Defender Firewall từ máy ảo Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  567: {
    q: ['Một tài khoản người dùng có thể có nhiều hơn một license Microsoft 365 không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  568: {
    q: ['Chúng ta dùng được SSO mà không cần Microsoft Authenticator không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  569: {
    q: [
      'Conditional Access dùng các tín hiệu thu thập được từ người dùng trong quá trình đăng nhập để quyết định cho phép',
      'hay từ chối yêu cầu truy cập.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Conditional Access là khả năng của Azure AD cho phép bạn tự động hoá việc kiểm soát',
        'truy cập dựa trên một số điều kiện của người dùng. Chính sách Conditional Access được áp dụng',
        'sau khi xác thực yếu tố thứ nhất đã hoàn tất. Nó không nhằm làm tuyến phòng thủ',
        'đầu tiên cho các tình huống như tấn công từ chối dịch vụ (DoS), nhưng nó dùng',
        'tín hiệu từ những sự kiện đó để quyết định quyền truy cập.',
      ],
    ],
  },

  570: {
    q: ['Conditional Access tập hợp các tín hiệu lại để ra quyết định và áp dụng chính sách của tổ chức.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },
};
