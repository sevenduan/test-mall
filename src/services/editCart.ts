import request from '@/utils/request';

export interface QueryItem {
  id: string;
  increment?: number;
  count?: number;
}

export async function editCart(params: QueryItem) {
  return request('/api/cart/edit', {
    method: 'POST',
    data: params,
  });
}
