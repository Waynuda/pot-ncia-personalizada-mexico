// ─── NEXOR TRACKING (auto-instalado via GitHub) ──────
(function () {
  var SUPABASE_URL = 'https://kglbkohmprsfwbltcaly.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_PXDKmJqTWih11oarHijLkQ_TLDma-ZI';
  var QUIZ_ID = 'quiz-mexico-ja1b';
  var TOTAL_STEPS = 32;
  var ETAPA_NOMES = {
  1: 'etapa-1',
  2: 'etapa-2',
  3: 'etapa-3',
  4: 'etapa-4',
  5: 'etapa-5',
  6: 'etapa-6',
  7: 'etapa-7',
  8: 'etapa-8',
  9: 'etapa-9',
  10: 'etapa-10',
  11: 'etapa-11',
  12: 'etapa-12',
  13: 'etapa-13',
  14: 'etapa-14',
  15: 'etapa-15',
  16: 'etapa-16',
  17: 'etapa-17',
  18: 'etapa-18',
  19: 'etapa-19',
  20: 'etapa-20',
  21: 'etapa-21',
  22: 'etapa-22',
  23: 'etapa-23',
  24: 'etapa-24',
  25: 'etapa-25',
  26: 'etapa-26',
  27: 'etapa-27',
  28: 'etapa-28',
  29: 'etapa-29',
  30: 'etapa-30',
  31: 'etapa-31',
  32: 'etapa-32'
  };

  function getSessionId() {
    var sid = sessionStorage.getItem('quiz_session_id');
    if (!sid) {
      sid = Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem('quiz_session_id', sid);
    }
    return sid;
  }

  var geoCache = null;
  function getGeo() {
    if (geoCache) return Promise.resolve(geoCache);
    return fetch('https://ipapi.co/json/')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        geoCache = {
          country: d.country_name || 'Unknown',
          region: d.region || 'Unknown',
          city: d.city || 'Unknown',
          country_code: d.country_code || 'XX'
        };
        return geoCache;
      })
      .catch(function () {
        geoCache = { country: 'Unknown', region: 'Unknown', city: 'Unknown', country_code: 'XX' };
        return geoCache;
      });
  }

  function trackEtapa(etapa, etapaNome, acao) {
    return getGeo().then(function (geo) {
      return fetch(SUPABASE_URL + '/rest/v1/quiz_eventos', {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': 'Bearer ' + SUPABASE_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          session_id: getSessionId(),
          quiz_id: QUIZ_ID,
          etapa: etapa,
          etapa_nome: etapaNome,
          acao: acao,
          country: geo.country,
          country_code: geo.country_code,
          region: geo.region,
          city: geo.city,
          last_seen: new Date().toISOString()
        })
      }).catch(function () {});
    });
  }

  // Auto-track on load
  window.NexorTracking = { trackEtapa: trackEtapa, ETAPA_NOMES: ETAPA_NOMES, QUIZ_ID: QUIZ_ID, TOTAL_STEPS: TOTAL_STEPS };
  trackEtapa(1, ETAPA_NOMES[1] || 'etapa-1', 'visualizou');
})();
